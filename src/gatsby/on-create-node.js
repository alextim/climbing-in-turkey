const path = require('path');
// const { fmImagesToRelative } = require('gatsby-remark-relative-images');
/**
 * add fileName to node for markdown files
 */
module.exports = ({ node, actions }) => {
  const { createNodeField } = actions;
  // fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const fileName = path.basename(node.fileAbsolutePath, '.md');
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
  }
};
