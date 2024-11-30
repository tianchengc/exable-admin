import { useShowError } from '../../../hooks/userError';
import { useService } from '../../../hooks/useService';
import { getKnowledgeList } from '../../../network/api';

/**
 * 拉取用户列表
 */
export const useGetKnowledgeList = () => {
  const [loading, knowledgeList, err, refreshKnowledgeList] =
    useService(getKnowledgeList);
  useShowError('Failed to fetch knowledge list', err);

  return {
    loading,
    knowledgeList,
    refreshKnowledgeList,
  };
};
