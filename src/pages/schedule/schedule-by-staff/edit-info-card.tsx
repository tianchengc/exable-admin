import { Card, Button, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Edit_Info_Card = () => {
  return (
    <Card
      style={{
        width: '350px',
        height: '220px',
        borderRadius: '20px',
        // padding: '10px',
        // margin: '40px',
        marginLeft: '72px',
        backgroundColor: '#a4dbec',
      }}
      bodyStyle={{
        // justifyContent: 'flex-start',
        padding: '10px 30px',
        // gap: '10px',
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
          <div style={{ textAlign: 'center' }}>
            <Button type="primary">Send</Button>
          </div>
        </Space>
      </>
    </Card>
  );
};

export default Edit_Info_Card;
