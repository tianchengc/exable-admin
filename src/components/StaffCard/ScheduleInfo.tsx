import { Button, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const ScheduleInfo = ({
  data,
  isHovered,
  isClicked,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  const isEmpty = data.isEmpty;

  const backgroundColor = isClicked
    ? '#033522'
    : isHovered
      ? '#033522'
      : isEmpty
        ? '#a4dbec'
        : '#fff';
  const textColor = isHovered || isClicked ? '#ffffff' : '#000000';

  return (
    <Card
      style={{
        // width: '250%',
        width: '1078px',
        borderRadius: '10px',
        padding: '10px',
        margin: '40px 0',
        backgroundColor: backgroundColor,
      }}
      bodyStyle={{
        display: 'flex',
        justifyContent: isEmpty ? 'center' : 'flex-start',
        alignItems: 'center',
        padding: '10px 5px',
        gap: '10px',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {isEmpty ? (
        <span style={{ color: textColor }}>No Schedule</span>
      ) : (
        <>
          <div style={{ flex: 1, fontWeight: 'bold', color: textColor }}>
            {data.title}
          </div>
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
            <span style={{ color: '#11cae2' }}>{data.capacity}</span>
          </div>
          <Button
            type="primary"
            size="small"
            style={{
              backgroundColor: '#F44336',
              borderColor: '#F44336',
              borderRadius: '20px',
            }}
          >
            View
          </Button>
        </>
      )}
    </Card>
  );
};
