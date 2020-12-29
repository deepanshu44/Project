import React, { Suspense }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './AppView.scss'

export default function AppView() {
  const [timer,setTimer]=React.useState(false)
  const [animate,setAnimate]=React.useState('animate1')
  setTimeout(()=>{setTimer(true)},2000)
  React.useEffect(()=>{
    var a=document.getElementById('1')
    setInterval(()=>console.log(a.getBoundingClientRect().top),1000)
    document.addEventListener('scroll',()=>{
      if (a.getBoundingClientRect().top<=window.innerHeight)
      {
        document.getElementById('3').style.top='0px';
        setAnimate('animate2')
        console.log("true");

      } else {
        console.log("false",a.getBoundingClientRect().y-window.innerHeight,Math.trunc(Math.log2(a.getBoundingClientRect().y-window.innerHeight)),
      " ",Math.trunc(Math.log(a.getBoundingClientRect().y-window.innerHeight))," ",Math.trunc(Math.log10(a.getBoundingClientRect().y-window.innerHeight)));
      }})
    },[])
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          {timer?<SimpleGrow value='visible'/>:<SimpleGrow value='hidden'/>}
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
            spacing={1}
            >
            <Grid item xs={12} className="test" >hello</Grid>
            <Grid item xs={12} md={6} className="test" >
              <Paper className="auto2-hidden">Test</Paper></Grid>
              <Grid item xs={6}className="test" >hello</Grid>
              <Grid item xs={7} className="test" >
                <Paper id='2' className="auto">xs=6</Paper>
              </Grid>
              <Grid item xs className="auto" >hello</Grid>
            </Grid>
            <Box component="span" m={1} >
              <Grid container
                 style={{height:'1200px'}}
                 spacing={2}
                 direction="column"
                 alignItems="center"
                 justify="center"
                  >
                <Grid item >
                  <Paper id='3' className="animate1">animate</Paper>
                </Grid>
                <Grid item >
                  <Paper id='1' className="animate1">animate</Paper>
                </Grid>
              </Grid>
            </Box>

          </Container>

        </React.Fragment>
      );
    }
