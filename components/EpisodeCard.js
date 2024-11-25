import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function EpisodeCard({ episode }) {
  // Helper function to truncate the description to the first two sentences
  const getShortDescription = (description) => {
    if (!description) return 'No description available.';
    const sentences = description.split('. ');
    return sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '...' : '');
  };

  console.log('EpisodeCard props:', episode); // Debug log

  return (
    <Card sx={{ cursor: 'pointer', height: '100%' }}>
      <a
        href={episode.external_urls?.spotify || '#'} // Fallback to "#" if link is unavailable
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          component="img"
          height="140"
          image={episode.images?.[0]?.url || '/images/default.jpg'} // Fallback to default image
          alt={episode.name || 'Episode Image'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {episode.name || 'No Title Available'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {getShortDescription(episode.description)}
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
}