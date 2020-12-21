import React, { Suspense }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios'
import './AppView.scss'

const OtherComponent = React.lazy(() =>import( './../Image/Image.jsx'))
export default function AppView() {console.log("hello");
  const [image,setImage]=React.useState('');
  React.useEffect(()=>{
    axios.get("http://192.168.1.18:8000/image").then((res)=>{
       var base64Icon = 'data:image/png;base64,'+res.data;
       setImage(base64Icon)
       console.log("got res");
    })
  },[])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">

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
          <Grid item xs={12} id='4' className="test">hello</Grid>
          <Grid item xs={12} md={6} className="testdark">
          <Paper className="auto2-hidden">Test</Paper></Grid>
          <Grid item xs={6}className="test" >hello</Grid>
          <Grid item xs={7} className="test" >
            <span style={{display:'flex',overflow:'hidden'}}><img src={image} /><img src={image} /></span>
          <Paper className="auto">xs=6</Paper>
        </Grid>
        <Grid item md={12} >qqqqq</Grid>
          <Grid item xs className="auto" >hello</Grid>
            <div>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
<Grid item md={12} style={{backgroundColor:'white'}}><div><LinearProgress className='test' style={{width:'100%'}}/></div></Grid>
        </Grid>

      </Container>


    </React.Fragment>
  );
}
