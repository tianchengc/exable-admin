import { Button, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ScheduleInfo = () => {
  return (
    <>
      <Card
        style={{
          width: '300%',
          borderRadius: '10px',
          padding: '10px', // 卡片内边距
          margin: '40px',
          justifyContent: 'flex-start',
        }}
        bodyStyle={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '10px 5px',
          gap: '5px',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '16px',
            textAlign: 'left',
            flexGrow: 5,
          }}
        >
          Group Exercise
        </div>
        <div style={{ fontSize: '16px', flexGrow: 5 }}>Session 8/20</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexGrow: 5,
          }}
        >
          <UserOutlined style={{ fontSize: '16px', color: '#888' }} />
          <span style={{ fontSize: '16px' }}>10/15</span>
        </div>

        <Button
          type="primary"
          shape="round"
          size="small"
          style={{
            backgroundColor: '#F44336',
            borderColor: '#F44336',
            flexGrow: 0,
          }}
        >
          View
        </Button>
      </Card>
    </>
  );
};

export default ScheduleInfo;
