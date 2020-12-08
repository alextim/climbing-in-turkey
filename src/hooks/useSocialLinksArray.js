import { useAppContext } from '../context';

const useSocialLinksArray = () => {
  const { socialLinks: { nodes } } = useAppContext();
  return nodes;
};

export default useSocialLinksArray;
