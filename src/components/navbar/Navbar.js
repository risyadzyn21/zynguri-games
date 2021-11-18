import * as React from 'react';
import './Navbar.scss'
import { makeStyles } from "@material-ui/core";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  nav: {
    backgroundColor: '#1f1d36',
    color: 'white'
  }
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Zynguri Games
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
