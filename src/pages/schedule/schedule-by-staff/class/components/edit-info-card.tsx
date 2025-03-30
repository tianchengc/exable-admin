import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Card, Button, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
import {
  setClickedButton,
  setHoveredButton,
  setOpenDialog,
  setErrorMessage,
  setInputValues,
} from '../../../../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Edit_Info_Card = () => {
  // const [hoveredButton, setHoveredButton] = useState(null);
  // const [clickedButton, setClickedButton] = useState(null);
  // const [openDialog, setOpenDialog] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  // const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const clickedButton = useSelector(state => state.clickedButton);
  const hoveredButton = useSelector(state => state.hoveredButton);
  const openDialog = useSelector(state => state.openDialog);
  const errorMessage = useSelector(state => state.errorMessage);
  const inputValue = useSelector(state => state.inputValue);

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

  // const handleClick = buttonName => {
  //   dispatch(setClickedButton(buttonName));

  //   setTimeout(() => {
  //     dispatch(setClickedButton(null));
  //   }, 200);
  // };

  const validateInput = () => {
    if (!inputValue.trim()) {
      dispatch(setErrorMessage('Please enter a valid number or character'));
      dispatch(setOpenDialog(true));
    } else {
      dispatch(setErrorMessage(''));
      dispatch(setOpenDialog(true));
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (!event.target.closest('.edit-info-card')) {
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
            onChange={e => dispatch(setInputValues(e.target.value))}
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
              onMouseEnter={() => dispatch(setHoveredButton('Send'))}
              onMouseLeave={() => dispatch(setHoveredButton(null))}
              onClick={validateInput}
            >
              Send
            </Button>
          </Space>
        </Space>
        <Dialog
          open={openDialog}
          onClose={() => dispatch(setOpenDialog(false))}
        >
          <DialogTitle>{errorMessage ? 'Error' : 'Success'}</DialogTitle>
          <DialogContent>
            {errorMessage || 'Your update has been sent!'}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => dispatch(setOpenDialog(false))}
              color="primary"
            >
              close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Card>
  );
};

export default Edit_Info_Card;
