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
  if (fileName == null || fileName === '' || typeof fileName !== 'string') {
    return null;
  }

  // remove           1-                & space & .xx (language key)
  const s = fileName
    .replace(/\d+-/, '')
    .trim()
    .replace(/\.[a-z]+$/i, '');
  // uppercase first letter
  return s.charAt(0).toUpperCase() + s.slice(1);
}

module.exports = (params) => {
  const { node, getNode, actions } = params;

  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  const fileName = path.basename(node.fileAbsolutePath, '.md');
  let partName;

  if (source === 'section') {
    partName = fileNameToSectionName(fileName);
  } else {
    [partName] = fileName.split('.');
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
    name: 'type',
    value: source,
  });
};
