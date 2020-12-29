import React, { Suspense }  from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import './ProgressBar.scss'

export default function AppView() {
  return (
          <LinearProgress style={{width:'100%',height:'20px',marginTop:'20px'}}/>
  );
}
