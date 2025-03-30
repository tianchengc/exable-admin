import { Card, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  setClickedButton,
  setHoveredButton,
} from '../../../../../redux/action';
import { useEffect } from 'react';

const Class_Info_Card = () => {
  const dispatch = useDispatch();
  const clickedButton = useSelector(state => state.clickedButton);
  const hoveredButton = useSelector(state => state.hoveredButton);

  const getButtonStyles = buttonName => {
    const isHovered = hoveredButton === buttonName;
    // const isClicked = clickedButton === buttonName;

    return {
      backgroundColor: isHovered ? '#11cae2' : '#fff',
      borderColor: isHovered ? '#11cae2' : '#fff',
      color: isHovered ? '#fff' : '#11cae2',
      borderRadius: '20px',
      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
    };
  };
  const handleClick = buttonName => {
    dispatch(setClickedButton(buttonName));

    setTimeout(() => {
      dispatch(setClickedButton(null));
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (!event.target.closest('.class-info-card')) {
        dispatch(setClickedButton(null));
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <Card
      style={{
        width: '350px',
        height: '220px',
        borderRadius: '10px',
        marginBottom: '40px',
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
              // Reschedule
              style={getButtonStyles('Reschedule')}
              onMouseEnter={() => dispatch(setHoveredButton('Reschedule'))}
              onMouseLeave={() => dispatch(setHoveredButton(null))}
              onClick={() => handleClick('Reschedule')}
            >
              Reschedule Class
            </Button>
            <Button
              type="primary"
              // Cancel
              style={getButtonStyles('Cancel')}
              onMouseEnter={() => dispatch(setHoveredButton('Cancel'))}
              onMouseLeave={() => dispatch(setHoveredButton(null))}
              onClick={() => handleClick('Cancel')}
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
