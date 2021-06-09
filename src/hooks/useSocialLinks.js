import { useAppContext } from '../context';

const useSocialLinks = () => {
  const { socialLinks } = useAppContext();
  if (!socialLinks.nodes.length) {
    return undefined;
  }
  return socialLinks.nodes.reduce((acc, { code, to, title }) => {
    acc[code] = { to, title };
    return acc;
  }, {});
};

export default useSocialLinks;
