const nl2br = (s) => {
  const r = typeof s === 'string' ? s : s.toString();

  return r.replace(/\r\n/g, '<br />').replace(/\n|\r/g, '<br />');
};

module.exports = nl2br;
