import React from 'react';
import SimpleGrow from './../Grow/Grow.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './AppView.scss'

export default function AppView() {
  const [timer,setTimer]=React.useState(false)
  const [visible,setVisible]=React.useState('auto2-hidden')
  setTimeout(()=>{ setVisible('auto2');setTimer(true)},2000)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        {timer?<SimpleGrow/>:''}
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            <TextField
              placeholder="search"
              color="success"/>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
          >
          <Grid item xs={12} className="test" >hello</Grid>
          <Grid item xs={12} md={6} className="test" >
          <Paper className={visible}>Test</Paper></Grid>
          <Grid item xs={6}className="test" >hello</Grid>
          <Grid item xs={7} className="test" >
          <Paper className="auto">xs=6</Paper>
        </Grid>
          <Grid item xs className="auto" >hello</Grid>
        </Grid>

      </Container>

    </React.Fragment>
  );
}
