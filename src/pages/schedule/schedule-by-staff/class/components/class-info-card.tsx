import { Card, Button, Space } from 'antd';

const Class_Info_Card = () => {
  return (
    <Card
      style={{
        width: '350px',
        height: '220px',
        borderRadius: '10px',
        marginBottom: '40px',
        // marginLeft: '80px',
        backgroundColor: '#a4dbec',
      }}
      bodyStyle={{
        justifyContent: 'flex-start',
        paddingTop: '10px',
      }}
    >
      <>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div style={{ fontWeight: 'bold' }}>May 11th | 12:00-1:00PM</div>
          <div>Group Exercise Class</div>
          <div>Session: 8/12</div>
          <div>Participants: 10/15</div>
          <Space
            direction="horizontal"
            size="small"
            align="center"
            style={{ paddingTop: '5px' }}
          >
            <Button type="primary" style={{ borderRadius: '20px' }}>
              Reschedule Class
            </Button>
            <Button type="primary" style={{ borderRadius: '20px' }}>
              Cancel Class
            </Button>
          </Space>
        </Space>
      </>
    </Card>
  );
};

export default Class_Info_Card;
