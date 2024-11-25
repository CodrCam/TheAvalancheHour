// pages/index.js

import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import ParallaxSection from '../components/ParallaxSection';
import EpisodeCard from '../components/EpisodeCard';
import SponsorGrid from '../components/SponsorGrid';

const episodes = [
  { id: 1, title: 'Episode 1', image: '/images/episode1.jpg', description: 'Description 1' },
  { id: 2, title: 'Episode 2', image: '/images/episode2.jpg', description: 'Description 2' },
  { id: 3, title: 'Episode 3', image: '/images/episode3.jpg', description: 'Description 3' },
];

const topSectionHeight = 350; // Height of the tagline section
const separatorSectionHeight = 300; // Height of each parallax separator section

export default function Home() {
  return (
    <>
      <Navbar />

      {/* First Parallax Section with Tagline */}
      <ParallaxSection
        backgroundImage="/images/background1.jpg"
        height={`${topSectionHeight}px`}
        strength={500}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: 'top',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            height: '100%',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              maxWidth: '800px',
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              fontFamily: 'Amatic, sans-serif',
              fontWeight: 'bold',
              color: 'text.primary', // Uses black text color from theme
            }}
          >
            Creating a stronger community through sharing stories, knowledge, and news amongst
            people who have a curious fascination with avalanches.
          </Typography>
        </Box>
      </ParallaxSection>

      {/* Latest Episodes Section with White Background */}
      <Box sx={{ backgroundColor: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
            sx={{
              fontFamily: 'Amatic, sans-serif',
              fontWeight: 'bold',
              color: 'text.primary',
            }}
          >
            Latest Episodes
          </Typography>
          <Grid container spacing={4}>
            {episodes.map((episode) => (
              <Grid item xs={12} sm={6} md={4} key={episode.id}>
                <EpisodeCard episode={episode} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Second Parallax Section as Separator with the Same Background Image */}
      <ParallaxSection
        backgroundImage="/images/background1.jpg"
        height={`${separatorSectionHeight}px`}
        strength={500}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: `center`, // Adjust positioning for visual alignment
        }}
      />

      {/* Sponsors Section with White Background */}
      <Box sx={{ backgroundColor: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
            sx={{
              fontFamily: 'Amatic, sans-serif',
              fontWeight: 'bold',
              color: 'text.primary',
            }}
          >
            Our Sponsors
          </Typography>
          <SponsorGrid />
        </Container>
      </Box>
    </>
  );
}