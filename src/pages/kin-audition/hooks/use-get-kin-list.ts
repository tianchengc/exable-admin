import { useShowError } from '../../../hooks/userError';
import { useService } from '../../../hooks/useService';
import { getKinList } from '../../../network/api';

/**
 * 拉取用户列表
 */
export const useGetKinList = () => {
  const [loading, kinList, err, refreshKinList] = useService(getKinList);
  useShowError('Failed to fetch kin list', err);

  return {
    loading,
    kinList,
    refreshKinList,
  };
};
