import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About The Avalanche Hour
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* Add about content here */}
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
