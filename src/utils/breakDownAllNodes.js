/**
 * break down all data retrieved in index.js
 */
export default function breakDownAllNodes(nodes) {

  // top part
  const topNode = nodes.find((e) => e.fields.fileName.startsWith('Top')) || {};
  // navbar
  const navBarNode = nodes.find((e) => e.fields.fileName.startsWith('NavBar')) || {};
  // footer
  const footerNode = nodes.find((e) => e.fields.fileName.startsWith('Footer')) || {};

  // sections part
  const sectionsNodes = nodes.filter((e) => e.fields.directoryName === 'sections') || {};

  // anchors for NavBar
  const anchors = sectionsNodes.map((e) => e.frontmatter.anchor).filter((e) => e);

  return {
    topNode,
    navBarNode,
    footerNode,
    sectionsNodes,
    anchors,
  };
}
