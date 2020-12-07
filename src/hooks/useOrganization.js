import { useAppContext } from '../context';

const useOrganization = () => {
  const { organization } = useAppContext();
  return organization;
};

export default useOrganization;
