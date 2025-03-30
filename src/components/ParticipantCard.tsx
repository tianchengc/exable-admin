import { MailOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';

const Participant_List = ({ data }) => {
  return (
    <Card
      style={{
        // width: '250%',
        width: '630px',
        height: '70px',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#fff',
      }}
      bodyStyle={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '3px 10px',
        // gap: '10px',
      }}
    >
      <>
        <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
          <Avatar
            shape="circle"
            size={'large'}
            style={{ backgroundColor: '#033522' }}
          />
          <div>
            <div style={{ fontWeight: 'bold' }}>{data.name}</div>
            <div style={{ color: '#11cae2' }}>{data.symptom}</div>
          </div>
        </div>
        <Button
          type="primary"
          shape="circle"
          style={{
            backgroundColor: '#11cae2',
            borderColor: '#11cae2',
            fontSize: '30px',
          }}
          icon={<MailOutlined />}
        ></Button>
      </>
    </Card>
  );
};

export default Participant_List;
