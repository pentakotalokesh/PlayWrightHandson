const { execSync } = require("child_process");
const fs = require("fs-extra");
const axios = require("axios");
const unzipper = require("unzipper");
const os = require("os");
const path = require("path");
 
const driverDir = path.join(__dirname, "drivers");
fs.ensureDirSync(driverDir);
 
const isWin = os.platform() === "win32";
const chromePath = isWin ? `"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"` : "google-chrome";
const edgePath = isWin ? `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"` : "microsoft-edge";
const firefoxPath = isWin ? `"C:\\Program Files\\Mozilla Firefox\\firefox.exe"` : "firefox";
 
// Generic downloader and unzipper
async function downloadAndUnzip(url, destName) {
  const zipPath = path.join(driverDir, `${destName}.zip`);
  const extractPath = path.join(driverDir, destName);
  fs.ensureDirSync(extractPath);
  try {
    console.log(`⬇️  Downloading ${destName} from ${url}`);
    const res = await axios.get(url, { responseType: "stream" });
    const writer = fs.createWriteStream(zipPath);
    await new Promise((resolve, reject) => {
res.data.pipe(writer);
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
 
    console.log(`📦 Extracting ${destName}`);
    await fs.createReadStream(zipPath)
      .pipe(unzipper.Extract({ path: extractPath }))
      .promise();
 
    fs.removeSync(zipPath);
    console.log(`✅ ${destName} ready at ${extractPath}\n`);
  } catch (err) {
    console.error(`❌ Error downloading/unzipping ${destName}:`, err.message);
  }
}
 
function getVersion(command) {
  try {
    return execSync(`${command} --version`).toString().match(/\d+(\.\d+)+/)[0];
  } catch {
    console.error(`⚠️  Failed to detect version using ${command}`);
    return null;
  }
}
 
async function main() {
  console.log("🚀 Starting driver setup...\n");
 
  // Chrome Driver
  const chromeVer = getVersion(chromePath);
  if (chromeVer) {
    const major = chromeVer.split(".")[0];
const chromeMetaURL = `https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions-with-downloads.json`;
    const chromeMeta = (await axios.get(chromeMetaURL)).data;
    const chromeURL = chromeMeta.channels.Stable.downloads.chromedriver.find(d =>
      d.platform === (isWin ? "win64" : os.platform() === "darwin" ? "mac-x64" : "linux64")
    ).url;
    await downloadAndUnzip(chromeURL, "chromedriver");
  }
 
  // Edge Driver
  const edgeVer = getVersion(edgePath);
  if (edgeVer) {
    const edgeMajor = edgeVer.split(".")[0];
const edgeBaseURL = `https://msedgedriver.azureedge.net/${edgeVer}/edgedriver_${isWin ? "win64" : "linux64"}.zip`;
    await downloadAndUnzip(edgeBaseURL, "edgedriver");
  }
 
  // Firefox Driver
const geckoReleases = (await axios.get("https://api.github.com/repos/mozilla/geckodriver/releases/latest")).data;
  const geckoAsset = geckoReleases.assets.find(asset =>
asset.name.includes(isWin ? "win64" : os.platform() === "darwin" ? "macos" : "linux64")
  );
  if (geckoAsset) await downloadAndUnzip(geckoAsset.browser_download_url, "geckodriver");
}
 
main();