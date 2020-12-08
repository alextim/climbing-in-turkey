const formatPhoneNumber = (s) => {
  const n = s.length;
  return `+ ${s.substring(0, n - 10)} ${s.substring(n - 10, n - 7)} ${s.substring(n - 7, n - 4)} ${s.substring(n - 4)}`;
};

export default formatPhoneNumber;
