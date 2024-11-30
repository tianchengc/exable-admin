import { useShowError } from '../../../hooks/userError';
import { useService } from '../../../hooks/useService';
import { getNewsList } from '../../../network/api';

/**
 * 拉取用户列表
 */
export const useGetNewsList = () => {
  const [loading, newsList, err, refreshNewsList] = useService(getNewsList);
  useShowError('Failed to fetch knowledge list', err);

  return {
    loading,
    newsList,
    refreshNewsList,
  };
};
