const i18n = require('../i18n/i18n');
const onDataNode = require('./helpers/onDataNode');
const onMdNode = require('./helpers/onMdNode');

module.exports = (params) => {
  const { node } = params;

  if (node.internal.type === 'Yaml') {
    onDataNode(params, i18n);
    return;
  }

  if (node.internal.type === 'MarkdownRemark') {
    onMdNode(params);
  }
};
