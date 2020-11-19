/**
 * 1-Services => Services
 * 1-services => Services
 * 1- services => Services
 * Services => Services
 * services => Services
 * 1-Services.ja -> Services
 */
export default function fileNameToSectionName(fileName) {
  if (fileName == null || fileName === "" || typeof fileName !== "string") {
    return null;
  }

  // remove           1-                & space & .xx (language key)
  fileName = fileName.replace(/\d+-/, "").trim().replace(/\.[a-z]+$/i, "");
  // uppercase first letter
  return fileName.charAt(0).toUpperCase() + fileName.slice(1);
}
