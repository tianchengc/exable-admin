import { useShowError } from '../../../hooks/userError';
import { useService } from '../../../hooks/useService';
import { getAdminList } from '../../../network/api';

/**
 * 拉取用户列表
 */
export const useGetAdminList = () => {
  const [loading, adminList, err, refreshAdminList] = useService(getAdminList);
  useShowError('Failed to fetch kin list', err);

  return {
    loading,
    adminList,
    refreshAdminList,
  };
};
