import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          The Avalanche Hour
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/episodes">
          Episodes
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About
        </Button>
        <Button color="inherit" component={Link} href="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
