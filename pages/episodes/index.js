import * as React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, TextField, CircularProgress } from '@mui/material';
import Navbar from '../../components/Navbar';

export default function Episodes() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [episodes, setEpisodes] = React.useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchEpisodes() {
      try {
        const response = await fetch('/api/spotify');
        if (!response.ok) throw new Error('Failed to fetch episodes');

        const data = await response.json();
        setEpisodes(data);
        setFilteredEpisodes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching episodes:', error);
        setLoading(false);
      }
    }

    fetchEpisodes();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredEpisodes(
      episodes.filter(
        (episode) =>
          episode.name.toLowerCase().includes(query) ||
          (episode.description && episode.description.toLowerCase().includes(query))
      )
    );
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
          Episodes
        </Typography>
        <TextField
          fullWidth
          label="Search by title or description"
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
                  image={episode.images[0]?.url || '/images/default.jpg'} // Fallback to default image
                  alt={episode.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {episode.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {episode.description || 'No description available'}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Release Date: {new Date(episode.release_date).toLocaleDateString()}
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