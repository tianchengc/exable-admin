import {
  Button,
  Form,
  message,
  Modal,
  Popconfirm,
  Tag,
  Tree,
  Upload,
  UploadProps,
} from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { FunctionComponent, useEffect, useState } from 'react';
import { Page } from '../../components/Page';
import { IAdmin } from '../../model';
import { useGetKinPartList } from './hooks/use-get-admin-list';
import {
  addAdmin,
  deleteAdmin as apiDeleteAdmin,
  genAttachUrl,
  getPartFileList,
  newAttchment,
} from '../../network/api';
import { DataNode } from 'antd/lib/tree';
import * as React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

export const KinList: FunctionComponent<{}> = () => {
  const { loading, kpList, refreshKPList } = useGetKinPartList();

  async function deleteAdmin(email: string) {
    const [, err] = await apiDeleteAdmin(email);
    if (err) {
      message.error(err.serverMessage);
    } else {
      refreshKPList();
    }
  }

  const [form] = Form.useForm();

  async function submit(u: { email: string }) {
    console.log(u);
    const [, err] = await addAdmin(u.email);
    if (err) {
      message.error(err.serverMessage);
    } else {
      refreshKPList();
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

  const [isLoad, setIsLoad] = useState(false);

  function getData() {
    return transformSessions(kpList).map(item => {
      const partChild: DataNode[] = item.parts?.map(
        (v: { partinfo: any; sessions: any[] }) => {
          const partTitle = `${v.partinfo.firstName} ${v.partinfo.lastName}(${v.partinfo.email})`;
          const sessionChild: DataNode[] = v.sessions
            .sort((a: any, b: any) => {
              return a.startDate - b.startDate;
            })
            .map(b => {
              const date = new Date(b.startDate);
              const year = date.getUTCFullYear();
              const month = (date.getUTCMonth() + 1)
                .toString()
                .padStart(2, '0');
              const day = date.getUTCDate().toString().padStart(2, '0');
              const sessionTitle = `Course${b.course} (${year}-${month}-${day} ${b.timeSlot.split('-')[1]}:00)`;
              const sessionId = `${item.kin.id}+${v.partinfo.id}+${b.id}`;
              return { title: sessionTitle, key: sessionId };
            });
          return {
            title: partTitle,
            key: `${item.kin.id}+${v.partinfo.id}`,
            children: sessionChild,
          };
        },
      );
      const kTitle = `${item.kin.firstName} ${item.kin.lastName}(${item.kin.email})`;
      return { title: kTitle, key: item.kin.id, children: partChild };
    });
  }

  useEffect(() => {
    // console.log(kpList)
    if (kpList != null) {
      console.log(transformSessions(kpList));
      const data: DataNode[] = getData();
      console.log(data);
      setTreeData(data);
    }
  }, [kpList]);

  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentKey, setCurrentKey] = useState('');

  const [uploadFilePath, setUploadFilePath] = useState('');
  const [uploadedFilePath, setUploadedFilePath] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [defaultFileListState, setDefaultFileListState] = useState([]);
  const [uploadFileStatus, setUploadFileStatus] = useState(false);
  const [currentKId, setCurrentKId] = useState('');
  const [currentPId, setCurrentPId] = useState('');

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  function transformSessions(sessions: any): any[] {
    const result = [];

    for (const session of sessions) {
      const kinId = session?.kinesiologist?.id;
      if (kinId == null) {
        console.log('wrong kin info');
        console.log(session);
        continue;
      }
      let kinOutput: any = result.find(item => item.kin.id === kinId);

      if (!kinOutput) {
        kinOutput = {
          kin: session.kinesiologist,
          parts: [],
        };
        result.push(kinOutput);
      }

      for (const participant of session.participants) {
        const partId = participant.id;
        let partOutput = kinOutput.parts.find(
          (item: any) => item.partinfo.id === partId,
        );

        if (!partOutput) {
          partOutput = {
            partinfo: participant,
            sessions: [],
          };
          kinOutput.parts.push(partOutput);
        }

        partOutput.sessions.push(session);
      }
    }

    return result;
  }

  const rightClick = (info: any) => {
    console.log(info);
    console.log(info.node);
    console.log(info.node.key);

    if (((info.node.key + '').match(/\+/g) || []).length !== 1) {
      return;
    }

    setCurrentKId(info.node.key.split('+')[0]);
    setCurrentPId(info.node.key.split('+')[1]);

    // const [ res, err ] = await getPartFileList(info.node.key)
    // if (err) {
    //     message.error(err.message)
    // } else {
    //     console.log(res)
    // }
    getUploadFileList(info.node.key.split('+')[1]);

    setCurrentKey(info.node.key);
    console.log(currentKId);
    console.log(currentPId);
    console.log(currentKey);
    setShowUploadModal(true);
  };

  const handleOk = () => {
    setShowUploadModal(false);
  };

  const handleCancel = () => {
    setShowUploadModal(false);
  };

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { value } = e.target
  //     const newExpandedKeys = treeData
  //         .map((item) => {
  //             if (item?.title !=null && item?.title.indexOf(value) > -1) {
  //                 return getParentKey(item.key, defaultData)
  //             }
  //             return null
  //         })
  //         .filter((item, i, self) => item && self.indexOf(item) === i);
  //     setExpandedKeys(newExpandedKeys as React.Key[])
  //     setSearchValue(value)
  //     setAutoExpandParent(true)
  // }

  const getUploadFileList = (pid: string) => {
    getPartFileList(pid).then(resp => {
      console.log(resp);
      const [res, err] = resp;
      if (err) {
        message.error(err.message);
      } else {
        console.log(res);
        let fileList = res
          .filter((item: any | null) => item !== null)
          .map((v: any | null) => {
            return {
              uid: v.id,
              name: v.fileName,
              status: 'done',
              url: v.url,
              thumbUrl: v.url,
            };
          });
        console.log('fileList', fileList);
        setDefaultFileListState(fileList);
      }
    });
  };

  const props: UploadProps = {
    name: 'file',
    accept: 'image/*,.pdf',
    defaultFileList: defaultFileListState,
    fileList: defaultFileListState,
    action: uploadFilePath,
    customRequest(optional: any) {
      console.log('on post');
      console.log(optional);
      // @ts-ignore
      axios
        .put(uploadedFilePath, optional.file, {
          headers: {
            'Content-Type': optional.file.type,
          },
        })
        .then(result => {
          console.log('Response from s3');
          optional.onSuccess(result, optional.file);
        })
        .catch(error => {
          optional.onError(error);
          console.log('ERROR ' + JSON.stringify(error));
        });
    },
    method: 'PUT',
    maxCount: 1,
    showUploadList: {
      showDownloadIcon: false,
      downloadIcon: 'Download',
      showRemoveIcon: false,
    },
    async beforeUpload(file) {
      return await genAttachUrl(file.name)
        .then(resp => {
          const [res, error] = resp;
          if (error != null) {
            message.error('get upload url fail!');
            return Promise.reject();
          } else {
            console.log('genAttachUrl');
            console.log(res);
            if (res == null) return Promise.reject();
            setUploadedFilePath(res.putUrl);
            setUploadFilePath(res.url);
            setUploadFileStatus(false);
            return true;
          }
        })
        .catch(error => {
          message.error('get upload url fail!');
          return Promise.reject();
        });
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        newAttchment(
          currentKId,
          currentPId,
          info.file.name,
          uploadFilePath,
        ).then(resp => {
          getUploadFileList(currentPId);
        });
        info.file.url = uploadFilePath;
        info.file.thumbUrl = uploadFilePath;
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      console.log('onChange.info', info);
      setDefaultFileListState(info.fileList);
    },
    // onDownload(file){
    //   console.log("onDownload",file)
    // },
    onPreview(file) {
      console.log('onPreview', file);
      window.open(file.thumbUrl);
      // setPreviewURL(file.url)
      // setPreviewVisible(true)
      // let downloadLink = document.createElement('a');
      // downloadLink.download = file.name
      // downloadLink.href = new URL(file.url);
      // console.log(downloadLink)
      // downloadLink.click();
    },
  };

  // @ts-ignore
  return (
    <Page title="K&P Relationship" loading={loading}>
      {/*<Form title="Add Admin" style={{ maxWidth: '600px' }} onFinish={submit} form={form}>*/}
      {/*    <Form.Item label="email" name="email">*/}
      {/*        <Input placeholder='Email address (MUST BE END WITH "@ex-able.com")'/>*/}
      {/*    </Form.Item>*/}
      {/*    <Form.Item>*/}
      {/*        <Button type="primary" htmlType="submit">Add</Button>*/}
      {/*    </Form.Item>*/}
      {/*</Form>*/}
      {/*<Table columns={columns} dataSource={kpList!}></Table>*/}
      <div>
        {/*<Search style={{ marginBottom: 8 }} placeholder="Search" onChange={onChange}/>*/}
        <Tree
          autoExpandParent={autoExpandParent}
          treeData={treeData}
          expandedKeys={expandedKeys}
          onExpand={onExpand}
          onRightClick={rightClick}
        />
        <Modal
          title="Add Patient's signed referral form"
          visible={showUploadModal}
          onCancel={handleCancel}
          footer={null}
          onOk={handleOk}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>
              Click to Upload Patient's signed referral form
            </Button>
          </Upload>
        </Modal>
      </div>
    </Page>
  );
};
