import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import './style.css';

export const Add_a_New_Class = () => {
  const format = 'HH:mm';

  const { Option } = Select;
  // State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Event handlers
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className="btn__modal" type="primary" onClick={showModal}>
        <PlusOutlined />
        Add a new class
      </Button>
      {/* <h1 className="staff">Staff Schedule</h1> */}
      <Modal
        className="modal_form"
        title="New class"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="616px"
      >
        <div>
          <Form className=" space-y-4 mt-4" title="Add_New_Class">
            <div className="flex gap-x-14">
              <Input placeholder="Professional" />
              <Input placeholder="Frequency" />
            </div>

            <div>
              <Select
                mode="multiple"
                style={{ width: '45%' }}
                placeholder="Class days"
              >
                <Option value="Monday" label="Monday">
                  Monday
                </Option>
                <Option value="Tuesday" label="Tuesday">
                  Tuesday
                </Option>
                <Option value="Wednesday" label="Wednesday">
                  Wednesday
                </Option>
                <Option value="Thursday" label="Thursday">
                  Thursday
                </Option>
                <Option value="Friday" label="Friday">
                  Friday
                </Option>
                <Option value="Saturday" label="Saturday">
                  Saturday
                </Option>
                <Option value="Sunday" label="Sunday">
                  Sunday
                </Option>
              </Select>
            </div>

            <div className="flex gap-x-48">
              <TimePicker format={format} placeholder="Start time" />
              <TimePicker format={format} placeholder="End time" />
            </div>

            <div>
              <Select
                mode="multiple"
                placeholder="Select group"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <TextArea placeholder="Class description" />
            </div>

            <Button
              className="btn_submit flex mx-52"
              shape="round"
              type="primary"
            >
              Create class
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Add_a_New_Class;
