import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack } from '@mui/material';
import { getMatchDetail } from '../api/Api';
import { useState, Fragment } from 'react';


const MyCard = ({ match }) => {

  const [detail, setDetail] = useState({});

  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    // alert(id);



    getMatchDetail(id).then((data) => {
      console.log("MATCH DATA", data);
      setDetail(data);
      handleOpen();

    })
  }


  const getMatchCard = () => {
    return (

      <Grid container spacing={2}>
        <Grid item xs={12}>

          <Card variant='outlined'>
            <CardContent>

              <Stack direction='row'>
                <Grid container justifyContent='center'>
                  <Typography variant='h5'>{match['t1']}</Typography>
                </Grid>
                <Grid container justifyContent='center'>

                  <img style={{ width: 85 }} src={require("../img/vs.png")} />


                </Grid>

                <Grid container justifyContent='center'>
                  <Typography variant='h5'>{match['t2']}</Typography>
                </Grid>
              </Stack>
            </CardContent>
            <CardActions>

              <Stack direction='row' spacing={2} justifyContent='center'>
                <Button onClick={() => {
                  handleClick(match.id)
                }} variant='contained'>
                  Show Detail
                </Button>
                <Button variant='contained'>Start Time {new Date(match.dateTimeGMT).toLocaleString()}</Button>
              </Stack>

            </CardActions>
          </Card>

        </Grid>
      </Grid>

    );

  }

  const handleClose=()=>{
    setOpen(false);
  }
  
  const handleOpen=()=>{
    setOpen(true);
  }


  const getDialog=()=>(
    <Dialog open = {open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Match Detail...."}</DialogTitle>

      <DialogContent>
        <DialogContentText id= "alert-dialog-discription">
          <Typography>{detail.stat}</Typography>
          <Typography>
            Status - 
            <span style={{fontStyle:"italic", fontWeight:"bold"}}>
              
              {match['status']}  
            </span>
          </Typography>

          {/* <Typography>
            Match
            <span style={{fontStyle:"italic", fontWeight:"bold"}}>
              
              {detail.Status}
            </span>
          </Typography> */}

          <Typography>
            Score T1 - 
            <span style={{fontStyle:"italic", fontWeight:"bold"}}>
              
                {match['t1s']}
            </span>
          </Typography>

          <Typography>
            Score T2 -  
            <span style={{fontStyle:"italic", fontWeight:"bold"}}>
              
                {match['t2s']}
            </span>
          </Typography>


        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>

    </Dialog>
  );
  
  
  
  return (
    <Fragment>
      {getMatchCard()}
      {getDialog()}
    </Fragment>
    );



}

export default MyCard;