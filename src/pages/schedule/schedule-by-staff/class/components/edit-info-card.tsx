import { Card, Button, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';

const Edit_Info_Card = () => {
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

  useEffect(() => {
    const handleClickOutside = event => {
      if (!event.target.closest('.edit-info-card')) {
        setClickedButton(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Card
      style={{
        width: '350px',
        height: '220px',
        borderRadius: '20px',
        marginRight: '20px',
        // marginLeft: '60px',
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
              // padding: '10px',
            }}
          />
          <Space
            align="center"
            style={{
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Button
              type="primary"
              style={getButtonStyles('Send')}
              onMouseEnter={() => setHoveredButton('Send')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => setClickedButton('Send')}
              // style={{
              //   borderRadius: '20px',
              //   backgroundColor: '#fff',
              //   borderColor: '#fff',
              //   color: '#11cae2',
              // }}
            >
              Send
            </Button>
          </Space>
        </Space>
      </>
    </Card>
  );
};

export default Edit_Info_Card;
