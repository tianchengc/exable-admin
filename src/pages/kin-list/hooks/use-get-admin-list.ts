import { useShowError } from '../../../hooks/userError';
import { useService } from '../../../hooks/useService';
import { getKinPartList } from '../../../network/api';

/**
 * 拉取用户列表
 */
export const useGetKinPartList = () => {
  const [loading, kpList, err, refreshKPList] = useService(getKinPartList);
  useShowError('Failed to fetch kin part list', err);

  return {
    loading,
    kpList,
    refreshKPList,
  };
};
