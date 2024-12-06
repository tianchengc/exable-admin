import { Card, Button, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Edit_Info_Card = () => {
  return (
    <Card
      style={{
        width: '350px',
        height: '220px',
        borderRadius: '20px',
        marginRight: '20px',
        marginLeft: '60px',
        backgroundColor: '#a4dbec',
      }}
      bodyStyle={{
        paddingTop: '5px',
      }}
    >
      <>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div style={{ fontWeight: 'bold', justifyContent: 'flex-start' }}>
            Class Reminder
          </div>
          <TextArea
            placeholder="Type here"
            style={{
              height: '120px',
              borderRadius: '20px',
              padding: '10px',
            }}
          />
          <Space
            align="center"
            style={{
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Button type="primary" style={{ borderRadius: '20px' }}>
              Send
            </Button>
          </Space>
        </Space>
      </>
    </Card>
  );
};

export default Edit_Info_Card;
