// components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Logo = styled('img')({
  height: '40px',
  marginRight: '16px',
});

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo on the top-left */}
        <Logo src="/images/logo.png" alt="The Avalanche Hour Logo" />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          The Avalanche Hour
        </Typography>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/episodes">
          Episodes
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" href="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}