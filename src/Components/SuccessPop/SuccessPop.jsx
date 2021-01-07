import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch,useStore } from 'react-redux'

export default function SuccessPop(props) {
  const dispatch=useDispatch()
  const handleClick = () => {
    dispatch(props.pop)
    console.log("here",props.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(props.pop)
    console.log("closed",props.value);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.value}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Note archived"
        
      />
    </div>
  );
}
