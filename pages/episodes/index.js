// pages/episodes/index.js

import * as React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, TextField } from '@mui/material';
import Navbar from '../../components/Navbar';

const episodes = [
  // Array of all episodes with id, title, description, date, image, tags, and guest
];

export default function Episodes() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredEpisodes, setFilteredEpisodes] = React.useState(episodes);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredEpisodes(
      episodes.filter(
        (episode) =>
          episode.title.toLowerCase().includes(query) ||
          episode.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          episode.guest.toLowerCase().includes(query)
      )
    );
  };

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
          Episodes
        </Typography>
        <TextField
          fullWidth
          label="Search by title, tags, or guest"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          sx={{ mb: 4 }}
        />
        <Grid container spacing={4}>
          {filteredEpisodes.map((episode) => (
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
                  <Typography variant="caption" display="block" gutterBottom>
                    Guest: {episode.guest}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Tags: {episode.tags.join(', ')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
