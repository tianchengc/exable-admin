import { FunctionComponent, useState } from 'react';
import { Page } from '../../components/Page';
import { IKnowledge, IResource } from '../../model';
import { useGetKnowledgeList } from './hooks/use-get-knowledge-list';
import './style.css';

import Table, { ColumnsType } from 'antd/lib/table';
import { Button, message, Popconfirm, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { deleteKnowledge } from '../../network/api';
import { KnowledgeModal } from './components/knowledge-modal';

export const KnowledgeManage: FunctionComponent<{}> = () => {
  const { loading, knowledgeList, refreshKnowledgeList } =
    useGetKnowledgeList();
  const [selectedKnowledge, setSelectedKnowledge] = useState<
    IKnowledge | undefined
  >(undefined);
  function genItemActionButtons(resource: IKnowledge) {
    return (
      <div className="action-container">
        {resource.content ? (
          <Button type="primary" target="_blank" href={resource.content}>
            View Content
          </Button>
        ) : null}
        <Button type="primary" onClick={() => setSelectedKnowledge(resource)}>
          Edit
        </Button>
        <Popconfirm
          placement="right"
          title="Are you sure to delete"
          onConfirm={onDelete(resource.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="default">Delete</Button>
        </Popconfirm>
      </div>
    );
  }
  function genTitle() {
    return (
      <Button type="primary" onClick={() => setSelectedKnowledge({})}>
        <PlusOutlined color="white" />
      </Button>
    );
  }

  function onDelete(id?: number) {
    return async () => {
      if (id) {
        const [, err] = await deleteKnowledge(id);
        if (err) {
          message.error(err.message);
        } else {
          refreshKnowledgeList();
        }
      }
    };
  }

  const columns: ColumnsType<IResource> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      key: 'title',
      dataIndex: 'title',
      ellipsis: {
        showTitle: false,
      },
      render: title => (
        <Tooltip placement="topLeft" title={title}>
          {title}
        </Tooltip>
      ),
    },
    {
      title: 'Summary',
      key: 'brief',
      dataIndex: 'brief',
      ellipsis: {
        showTitle: false,
      },
      render: brief => (
        <Tooltip placement="topLeft" title={brief}>
          {brief}
        </Tooltip>
      ),
    },
    {
      title: 'Album',
      dataIndex: 'album',
      render: albumUrl => <img className="album" src={albumUrl} />,
    },
    {
      title: 'Action',
      render: (_, u) => genItemActionButtons(u),
    },
  ];

  function onOk() {
    setSelectedKnowledge(undefined);
    refreshKnowledgeList();
  }

  function onCancel() {
    setSelectedKnowledge(undefined);
  }
  return (
    <Page title={'Kin Audition'} loading={loading}>
      <Table
        columns={columns}
        dataSource={knowledgeList!}
        className="resource-table"
        title={genTitle}
        pagination={false}
      />
      <KnowledgeModal
        knowledge={selectedKnowledge}
        onOK={onOk}
        onCancel={onCancel}
      />
    </Page>
  );
};
