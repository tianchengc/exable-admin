import { FunctionComponent, useState } from 'react';
import { Page } from '../../components/Page';
import { IResource } from '../../model';
import { useGetResourceList } from './hooks/use-get-resource-list';
import './style.css';

import Table, { ColumnsType } from 'antd/lib/table';
import { Button, message, Popconfirm, Tooltip } from 'antd';
import { courseName, NewResourceModal } from './components/new-resource-modal';
import { PlusOutlined } from '@ant-design/icons';
import { deleteResource } from '../../network/api';

export const ResourceManage: FunctionComponent<{}> = () => {
  const { loading, resourceList, refreshResourceList } = useGetResourceList();
  const [selectedResource, setSelectedResource] = useState<
    IResource | undefined
  >(undefined);
  function genItemActionButtons(resource: IResource) {
    return (
      <div className="action-container">
        <Button type="primary" onClick={() => setSelectedResource(resource)}>
          Edit
        </Button>
        {resource.content ? (
          <Button type="primary" target="_blank" href={resource.content}>
            View Content
          </Button>
        ) : null}
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
      <Button type="primary" onClick={() => setSelectedResource({})}>
        <PlusOutlined color="white" />
      </Button>
    );
  }

  function onDelete(id?: number) {
    return async () => {
      if (id) {
        const [, err] = await deleteResource(id);
        if (err) {
          message.error(err.message);
        } else {
          refreshResourceList();
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
      title: 'Button Text',
      key: 'buttonText',
      dataIndex: 'buttonText',
    },
    {
      title: 'Album',
      dataIndex: 'album',
      render: albumUrl => <img className="album" src={albumUrl} />,
    },
    {
      title: 'Course',
      dataIndex: 'bindCourse',
      render: (course: number) => <span>{courseName(course)}</span>,
    },
    {
      title: 'Action',
      render: (_, u) => genItemActionButtons(u),
    },
  ];

  function onOk() {
    setSelectedResource(undefined);
    refreshResourceList();
  }

  function onCancel() {
    setSelectedResource(undefined);
  }
  return (
    <Page title={'Resource Manage'} loading={loading}>
      <Table
        columns={columns}
        dataSource={resourceList!}
        className="resource-table"
        title={genTitle}
        pagination={false}
      />
      <NewResourceModal
        resource={selectedResource}
        onOK={onOk}
        onCancel={onCancel}
      />
    </Page>
  );
};
