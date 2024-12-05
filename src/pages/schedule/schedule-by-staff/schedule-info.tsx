import { Button, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ScheduleInfo = ({ data }) => {
  const isEmpty = data.isEmpty;

  return (
    <Card
      style={{
        // width: '250%',
        width: '1078px',
        borderRadius: '10px',
        padding: '10px',
        margin: '40px',
        backgroundColor: isEmpty ? '#a4dbec' : '#fff',
      }}
      bodyStyle={{
        display: 'flex',
        justifyContent: isEmpty ? 'center' : 'flex-start',
        alignItems: 'center',
        padding: '10px 5px',
        gap: '5px',
      }}
    >
      {isEmpty ? (
        <span>No Schedule</span>
      ) : (
        <>
          <div style={{ flex: 1, fontWeight: 'bold' }}>{data.title}</div>
          <div style={{ flex: 1, color: '#11cae2' }}>
            Session {data.session}
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <UserOutlined style={{ color: '#11cae2' }} />
            <span>{data.capacity}</span>
          </div>
          <Button
            type="primary"
            size="small"
            style={{
              backgroundColor: '#F44336',
              borderColor: '#F44336',
            }}
          >
            View
          </Button>
        </>
      )}
    </Card>
  );
};

export default ScheduleInfo;
