import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function EpisodeCard({ episode }) {
  return (
    <Card>
      <CardMedia component="img" height="140" image={episode.image} alt={episode.title} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {episode.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {episode.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/episodes/${episode.id}`}>
          Listen Now
        </Button>
      </CardActions>
    </Card>
  );
}
