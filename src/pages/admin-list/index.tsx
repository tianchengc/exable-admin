import { Button, Form, Input, message, Popconfirm, Tag } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { FunctionComponent } from 'react';
import { Page } from '../../components/Page';
import { IAdmin } from '../../model';
import { useGetAdminList } from './hooks/use-get-admin-list';
import { addAdmin, deleteAdmin as apiDeleteAdmin } from '../../network/api';

export const AdminList: FunctionComponent<{}> = () => {
  const { loading, adminList, refreshAdminList } = useGetAdminList();
  async function deleteAdmin(email: string) {
    const [, err] = await apiDeleteAdmin(email);
    if (err) {
      message.error(err.serverMessage);
    } else {
      refreshAdminList();
    }
  }

  const [form] = Form.useForm();
  async function submit(u: { email: string }) {
    console.log(u);
    const [, err] = await addAdmin(u.email);
    if (err) {
      message.error(err.serverMessage);
    } else {
      refreshAdminList();
    }

    form.resetFields();
  }

  const columns: ColumnsType<IAdmin> = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      render: (_, rec) =>
        rec.deletable ? (
          <Popconfirm
            placement="right"
            title="Are you sure to delete"
            onConfirm={() => deleteAdmin(rec.email)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary">Delete</Button>
          </Popconfirm>
        ) : (
          <Tag color="magenta" key="Super Admin">
            Super Admin
          </Tag>
        ),
    },
  ];
  return (
    <Page title="Admin Manage" loading={loading}>
      <Form
        title="Add Admin"
        style={{ maxWidth: '600px' }}
        onFinish={submit}
        form={form}
      >
        <Form.Item label="email" name="email">
          <Input placeholder='Email address (MUST BE END WITH "@ex-able.com")' />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={adminList!}></Table>
    </Page>
  );
};
