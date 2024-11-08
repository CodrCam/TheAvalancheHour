import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import LatestEpisodes from '../components/LatestEpisodes';
import Sponsors from '../components/Sponsors';

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Image
            src="/images/TheAviHourPodcast-NewLogo-ALLBLACK.png"
            alt="The Avalanche Hour Logo"
            width={200}
            height={200}
          />
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to The Avalanche Hour Podcast
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Your source for the latest in avalanche education and stories.
          </Typography>
          <Button variant="contained" color="primary" href="/episodes">
            Listen to Latest Episodes
          </Button>
        </Box>
        <LatestEpisodes />
        <Sponsors />
      </Container>
    </React.Fragment>
  );
}
