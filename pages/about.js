import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Navbar from '../components/Navbar';

const hosts = [
  {
    name: 'Caleb Merrill',
    images: ['/images/default.jpg', '/images/default.jpg', '/images/default.jpg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Dom Baker',
    images: ['/images/default.jpg', '/images/default.jpg', '/images/default.jpg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Sean Zimmerman-Wall',
    images: ['/images/sean1.jpg', '/images/sean2.jpg', '/images/sean3.jpg'], // Replace with real images
    description:
      'Sean is a father and lifelong learner. Living in Utah for almost two decades, he has worked extensively in ski area and mechanized guiding operations. Sean’s values include helping others and creating things that endure. He is a founding member of Snowbird Ski Patrol’s Peer Support Team and is grateful to have the opportunity to help his fellow patrollers stay in the Green. Additional roles Sean fulfills include the management of AIARE’s professional avalanche education program and operational oversight for the delivery of courses. He served three consecutive terms on the American Avalanche Association Board of Trustees and is now moving to volunteerism in his children’s school system.',
  },
  {
    name: 'Brooke Edwards',
    images: ['/images/default.jpg', '/images/default.jpg', '/images/default.jpg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Add more hosts as needed
];

const producers = [
  {
    name: 'Cam',
    images: ['/images/default.jpg', '/images/default.jpg', '/images/default.jpg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Wes',
    images: ['/images/default.jpg', '/images/default.jpg', '/images/default.jpg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function About() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderPersonCard = (person) => (
    <Card
      key={person.name}
      id={person.name.replace(/\s+/g, '-').toLowerCase()} // Create a unique ID for scrolling
      sx={{ mb: 4, p: 2 }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {person.name}
        </Typography>
        <Typography variant="body1">{person.description}</Typography>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mt: 2,
          flexWrap: 'wrap', // Ensure wrapping for smaller screens
        }}
      >
        {person.images.map((image, index) => (
          <CardMedia
            key={index}
            component="img"
            image={image}
            alt={`${person.name} image ${index + 1}`}
            sx={{
              width: 200, // Twice as large as before
              height: 200, // Ensure a square layout
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        ))}
      </Box>
    </Card>
  );

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg" sx={{ display: 'flex', mt: 4 }}>
        {/* Sidebar */}
        <Box sx={{ flex: 1, maxWidth: '250px', mr: 4 }}>
          <Typography variant="h6" gutterBottom>
            Hosts
          </Typography>
          <List>
            {hosts.map((host) => (
              <ListItem
                key={host.name}
                button
                onClick={() => scrollToSection(host.name.replace(/\s+/g, '-').toLowerCase())}
              >
                <ListItemText primary={host.name} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" gutterBottom>
            Producers
          </Typography>
          <List>
            {producers.map((producer) => (
              <ListItem
                key={producer.name}
                button
                onClick={() => scrollToSection(producer.name.replace(/\s+/g, '-').toLowerCase())}
              >
                <ListItemText primary={producer.name} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 3 }}>
          <Typography variant="h4" gutterBottom>
            About The Avalanche Hour
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
            Learn about the amazing team behind The Avalanche Hour Podcast.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Hosts
          </Typography>
          {hosts.map(renderPersonCard)}
          <Typography variant="h5" gutterBottom>
            Producers
          </Typography>
          {producers.map(renderPersonCard)}
        </Box>
      </Container>
    </React.Fragment>
  );
}