import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Card, Button, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';

const Edit_Info_Card = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

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

  const validateInput = () => {
    if (!inputValue.trim()) {
      setErrorMessage('Please enter a valid number or character');
      setOpenDialog(true);
    } else {
      setErrorMessage('');
      setOpenDialog(true);
    }
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
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            style={{
              height: '120px',
              borderRadius: '20px',
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
              onClick={validateInput}
            >
              Send
            </Button>
          </Space>
        </Space>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>{errorMessage ? 'Error' : 'Success'}</DialogTitle>
          <DialogContent>
            {errorMessage || 'Your update has been sent!'}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Card>
  );
};

export default Edit_Info_Card;
