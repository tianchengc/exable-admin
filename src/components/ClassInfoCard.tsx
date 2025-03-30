import { Card, Button, Space } from 'antd';
import { useState } from 'react';

const Class_Info_Card = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  const getButtonStyles = buttonName => {
    const isHovered = hoveredButton === buttonName;
    const isClicked = clickedButton === buttonName;

    return {
      backgroundColor: isHovered || isClicked ? '#11cae2' : '#fff',
      borderColor: isHovered || isClicked ? '#11cae2' : '#fff',
      color: isHovered || isClicked ? '#fff' : '#11cae2',
      borderRadius: '20px',
    };
  };

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
            <Button
              type="primary"
              style={getButtonStyles('Reschedule')}
              onMouseEnter={() => setHoveredButton('Reschedule')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => setClickedButton('Reschedule')}
            >
              Reschedule Class
            </Button>
            <Button
              type="primary"
              style={getButtonStyles('Cancel')}
              onMouseEnter={() => setHoveredButton('Cancel')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => setClickedButton('Cancel')}
              // style={{
              //   borderRadius: '20px',
              //   backgroundColor: '#fff',
              //   borderColor: '#fff',
              //   color: '#11cae2',
              // }}
            >
              Cancel Class
            </Button>
          </Space>
        </Space>
      </>
    </Card>
  );
};

export default Class_Info_Card;
