import * as React from 'react';
import './Navbar.scss'
import { makeStyles } from "@material-ui/core";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-logo'>
          Zynguri Games
        </div>
      </nav>
    </>
  );
}
