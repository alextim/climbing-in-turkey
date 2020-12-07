const path = require('path');

/**
 * 1-Services => Services
 * 1-services => Services
 * 1- services => Services
 * Services => Services
 * services => Services
 * 1-Services.ja -> Services
 */
function fileNameToSectionName(fileName) {
  if (fileName == null || fileName === "" || typeof fileName !== "string") {
    return null;
  }

  // remove           1-                & space & .xx (language key)
  fileName = fileName.replace(/\d+-/, "").trim().replace(/\.[a-z]+$/i, "");
  // uppercase first letter
  return fileName.charAt(0).toUpperCase() + fileName.slice(1);
}


module.exports = ({ node, getNode, actions }) => {
  if (node.internal.type !== 'MarkdownRemark') {
      return;
  }
  const { createNodeField } = actions;

  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  const fileName = path.basename(node.fileAbsolutePath, '.md');
  let partName;

  if (source === 'sections') {
    partName = fileNameToSectionName(fileName);
  } else {
    partName = fileName.split('.')[0];
  }

  createNodeField({
    node,
    name: 'partName',
    value: partName,
  });

  createNodeField({
    node,
    name: 'fileName',
    value: fileName,
  });

  createNodeField({
    node,
    name: 'directoryName',
    value: path.basename(path.dirname(node.fileAbsolutePath)),
  });

  createNodeField({
    node,
    name: 'source',
    value: source,
  });

};
