import { FunctionComponent, useState } from 'react';
import { Page } from '../../components/Page';
import { IUser } from '../../model';
import { useGetKinList } from './hooks/use-get-kin-list';
import './style.css';

import Table, { ColumnsType } from 'antd/lib/table';
import { Button, Tag } from 'antd';
import { KinApprovingModal } from './components/approving-modal';

export const KinAudition: FunctionComponent<{}> = () => {
  const { loading, kinList, refreshKinList } = useGetKinList();
  const [selectedKin, setSelectedKin] = useState<IUser | undefined>();

  function genAuditionBtn(kin: IUser) {
    if (!kin.kinesiologistInfo.approved) {
      return <Button onClick={() => setSelectedKin(kin)}>Approve</Button>;
    } else {
      return <Tag color="green">Approved</Tag>;
    }
  }

  const columns: ColumnsType<IUser> = [
    {
      title: 'UID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Name',
      key: 'name',
      render: (_, u) => <span>{`${u.firstName} ${u.lastName}`}</span>,
    },
    {
      title: 'Location',
      key: 'location',
      render: (_, u) => <span>{`${u.city}, ${u.province}`}</span>,
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
    {
      title: 'Approved',
      render: (_, u) => {
        if (u.kinesiologistInfo) {
          return genAuditionBtn(u);
        } else {
          return (
            <Tag color="volcano" key="NOT FINISHING">
              REGISTION NOT FINISHED
            </Tag>
          );
        }
      },
    },
  ];

  function onOk() {
    console.log('fuck');
    setSelectedKin(undefined);
    refreshKinList();
  }

  function onCancel() {
    setSelectedKin(undefined);
  }
  return (
    <Page title={'Kin Audition'} loading={loading}>
      <Table columns={columns} dataSource={kinList!} pagination={false} />
      <KinApprovingModal kin={selectedKin} onOK={onOk} onCancel={onCancel} />
    </Page>
  );
};
