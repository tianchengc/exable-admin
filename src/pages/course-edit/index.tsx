import {
  Alert,
  Button,
  Form,
  Input,
  message,
  Select,
  Space,
  Upload,
  UploadProps,
} from 'antd';
import {
  FunctionComponent,
  LegacyRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Page } from '../../components/Page';
import { ICourse } from '../../model';
import { useGetCourseList } from '../../hooks/use-get-course-list';
import './style.css';
import { Editor } from '@tinymce/tinymce-react';
import {
  genCoursePicPutUrl,
  genCourseVideoPutUrl,
  updateCourse,
} from '../../network/api';
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { UploadRequestOption } from 'rc-upload/lib/interface';
import { useNavigate, useParams } from 'react-router';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { tryCatch } from '../../utils/try-catch';
import { lookup as mime } from 'mime-types';

type FromSubmitValues = Pick<
  ICourse,
  | 'id'
  | 'title'
  | 'htmlContent'
  | 'htmlPrepare'
  | 'quiz'
  | 'titleForKin'
  | 'contentForKin'
  | 'htmlPreSession'
  | 'htmlPartPrepare'
  | 'preSessionTitleForKin'
  | 'contentTitleForKin'
> & {
  videoLink?:
    | string
    | {
        file: {
          response: string;
        };
      };
  quizF?: Array<any>;
};

const QuizFormArea = (props: any) => {
  return (
    <>
      <label>Quiz</label>
      <Form.List
        name="quizF"
        initialValue={props.course?.quiz ? JSON.parse(props.course?.quiz) : []}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                direction="vertical"
                size="small"
                style={{ display: 'flex', marginBottom: 4 }}
                wrap={true}
                align="start"
              >
                <Form.Item {...restField} name={[name, 'kind']} label="Type">
                  <Select
                    style={{ width: 120 }}
                    options={[
                      {
                        value: '0',
                        label: 'Select',
                      },
                      {
                        value: '1',
                        label: 'Rank',
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'title']}
                  label={'Title'}
                  style={{ width: 600 }}
                  rules={[{ required: true, message: 'Missing title' }]}
                >
                  <Input placeholder="Title" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'optionA']}
                  style={{ width: 600 }}
                  label="optionA/MinValue"
                  rules={[{ required: true, message: 'Missing optionA' }]}
                >
                  <Input placeholder="optionA" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'optionB']}
                  style={{ width: 600 }}
                  label="optionB/MinValueName"
                  rules={[{ required: true, message: 'Missing optionB' }]}
                >
                  <Input placeholder="optionB" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'optionC']}
                  style={{ width: 600 }}
                  label="optionC/MaxValue"
                  rules={[{ required: true, message: 'Missing optionC' }]}
                >
                  <Input placeholder="optionC" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'optionD']}
                  style={{ width: 600 }}
                  label="optionD/MaxValueName"
                  rules={[{ required: true, message: 'Missing optionD' }]}
                >
                  <Input placeholder="optionD" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'optionE']}
                  style={{ width: 600 }}
                  label="optionE,Only for select type"
                >
                  <Input placeholder="optionE" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'optionF']}
                  style={{ width: 600 }}
                  label="optionF,Only for select type"
                >
                  <Input placeholder="optionF" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Quiz
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
};

export const CourseEdit: FunctionComponent<{}> = props => {
  const params = useParams();
  const courseId = params.id;

  const { loading, courseList } = useGetCourseList();
  const course = _.find(courseList, c => c.id === courseId);
  console.log(course);
  const [form] = Form.useForm();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (course || courseId) {
      form.resetFields();
      form.setFieldsValue({
        id: courseId,
        ...course,
      });
    }
  });

  const { uploadProps: videoUploadProps } = useMemo(() => {
    const uploadProps: UploadProps = {
      name: 'playUrl',
      method: 'PUT',
      defaultFileList: [],
      maxCount: 1,
      multiple: false,
      accept: '.mp4',
      customRequest: async (options: UploadRequestOption) => {
        const [res, err] = await genCourseVideoPutUrl();
        if (err || !res || !res.putUrl) {
          message.error('upload failed');
          options.onError?.({
            url: '',
            name: '',
            message: err?.message ?? '',
          });
          return;
        }
        const { url, putUrl } = res;
        console.log(options.file);
        axios
          .put(putUrl, options.file, {
            headers: {
              'Content-Type': mime(options.filename!),
            },
          })
          .then(result => {
            // @ts-expect-error don't need parameter
            options.onSuccess(url);
          })
          .catch(err => {
            options.onError?.(err);
          });
      },
    };
    if (course?.videoLink) {
      uploadProps.defaultFileList!.push({
        uid: uuid(),
        url: course.videoLink,
        name: 'video.mp4',
      });
    }
    return {
      uploadProps,
    };
  }, [course?.videoLink, form]);

  const contentRef = useRef<Editor>(null);
  const contentForKinRef = useRef<Editor>(null);
  const prepareRef = useRef<Editor>(null);
  const htmlPreSessionRef = useRef<Editor>(null);
  const htmlPartPrepareRef = useRef<Editor>(null);
  const navigate = useNavigate();

  const onClose = () => {
    setShowError(false);
  };

  async function onSubmit(c: FromSubmitValues) {
    console.log('before', c);
    const errorQuestion = c.quizF?.filter(v => {
      if (v.kind != 1) {
        return false;
      }

      return !(Number(v.optionA) && Number(v.optionC));
    });
    if (errorQuestion && errorQuestion.length > 0) {
      let content = `quiz: ${errorQuestion[0].title}`;
      if (!Number(errorQuestion[0].optionA)) {
        content += ', optionA should be a number.';
      }

      if (!Number(errorQuestion[0].optionC)) {
        content += ', optionC should be a number.';
      }

      message.error(content);
      console.log('errorQuestion', errorQuestion);
      return;
    }
    console.log('after', c);
    const course = {
      ...c,
      videoLink:
        typeof c.videoLink === 'string'
          ? c.videoLink
          : c.videoLink?.file.response,
      htmlContent: contentRef.current?.editor?.getContent(),
      htmlPrepare: prepareRef.current?.editor?.getContent(),
      contentForKin: contentForKinRef.current?.editor?.getContent(),
      htmlPreSession: htmlPreSessionRef.current?.editor?.getContent(),
      htmlPartPrepare: htmlPartPrepareRef.current?.editor?.getContent(),

      quiz: JSON.stringify(c.quizF),
    };
    const [res, err] = await updateCourse(course);
    if (err) {
      message.error(err.message);
    } else {
      navigate('/course');
    }
  }

  return (
    <Page title={'Course Manage'} loading={loading}>
      <Form
        form={form}
        name="video-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
        onFinish={onSubmit}
        onFinishFailed={() => message.error(``)}
        autoComplete="off"
      >
        <Form.Item
          label="Course ID"
          required
          tooltip="should be 1-12"
          name="id"
        >
          <Input value={courseId} disabled />
        </Form.Item>
        <Form.Item label="Title" required name="title">
          <Input value={course?.title} />
        </Form.Item>

        <Form.Item label="Title (Kins' side)" required name="titleForKin">
          <Input value={course?.titleForKin} />
        </Form.Item>

        <Form.Item
          label="Before Session Title (Kins' side)"
          required
          name="preSessionTitleForKin"
        >
          <Input value={course?.preSessionTitleForKin} />
        </Form.Item>

        <Form.Item
          label="Content Title (Kins' side)"
          required
          name="contentTitleForKin"
        >
          <Input value={course?.contentTitleForKin} />
        </Form.Item>

        <Form.Item label="Course Detail" required>
          <XEditor rrrrref={contentRef} initialValue={course?.htmlContent} />
        </Form.Item>

        <Form.Item label="Course Detail (Kins' side)" required>
          <XEditor
            rrrrref={contentForKinRef}
            initialValue={course?.contentForKin}
          />
        </Form.Item>

        <Form.Item label="Pre-session Content(For course 1)" required>
          <XEditor
            rrrrref={htmlPreSessionRef}
            initialValue={course?.htmlPreSession}
          />
        </Form.Item>

        <Form.Item label="Before Session Content" required>
          <XEditor
            rrrrref={htmlPartPrepareRef}
            initialValue={course?.htmlPartPrepare}
          />
        </Form.Item>

        <Form.Item label="Course Prepare (Kins' side)" required>
          <XEditor rrrrref={prepareRef} initialValue={course?.htmlPrepare} />
        </Form.Item>
        <QuizFormArea course={course} form={form} />
        <Form.Item label="Video" name="videoLink">
          <Upload {...videoUploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload Video</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Done
          </Button>
        </Form.Item>
      </Form>
      {showError && (
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable
          onClose={onClose}
        />
      )}
    </Page>
  );
};

async function images_upload_handler(
  blobInfo: any,
  progress: any,
): Promise<string> {
  // let param = new FormData();
  // param.append("img", blob.blob());
  // let data = await update_img(param);//update_img是自己定义的上传图片视频方法,需要自行封装，很简单
  // success(data.url);
  const [info] = await genCoursePicPutUrl();
  if (info && info.putUrl && info.url) {
    console.log();
    mime(blobInfo.filename());
    const [, uploadErr] = await tryCatch(
      axios.put(info?.putUrl, blobInfo.blob(), {
        headers: {
          'Content-Type': mime(blobInfo.filename()),
        },
      }),
    );
    if (uploadErr) {
      console.error(uploadErr);
      message.error('upload failed');
      throw uploadErr;
    }
    return info.url;
  }

  message.error('upload failed');
  throw '';
}

const XEditor: FunctionComponent<{
  rrrrref: LegacyRef<Editor>;
  initialValue?: string;
}> = props => {
  return (
    <Editor
      ref={props.rrrrref}
      initialValue={props.initialValue}
      apiKey="d1ldr9eses6e16jj4se054pf9iugv9rl6menk4r50owzsd68"
      plugins="link lists image code table wordcount fullscreen"
      toolbar="undo redo bold italic underline strikethrough fontselect fontsizeselect formatselect alignleft aligncenter alignright alignjustify outdent indent forecolor backcolor removeformat fullscreen image link"
      init={{
        images_upload_handler,
      }}
    />
  );
};
