// components/LatestEpisodes.js

import * as React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const episodes = [
  {
    id: 1,
    title: 'Episode 1: Introduction to Avalanche Safety',
    description: 'An introduction to avalanche safety protocols.',
    date: '2023-01-01',
    image: '/images/episode1.jpg',
  },
  // Add more episodes as needed
];

export default function LatestEpisodes() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h2" gutterBottom>
        Latest Episodes
      </Typography>
      <Grid container spacing={4}>
        {episodes.map((episode) => (
          <Grid item key={episode.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={episode.image}
                alt={episode.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {episode.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {episode.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href={`/episodes/${episode.id}`}
                  sx={{ mt: 2 }}
                >
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
