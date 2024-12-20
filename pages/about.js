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
    name: "Caleb Merrill",
    images: ["/images/caleb1.jpg", "/images/caleb2.jpg", "/images/caleb3.jpg"],
    description: "Caleb got his start in the snow and avalanche world in 2006 while working as a ski patroller and avalanche mitigation tech at Solitude Mountain Resort in Utah's Wasatch Mountain Range. Some of his favorite memories there are of doing early morning avalanche mitigation work along Honeycomb Canyon's Fantasy Ridge. In 2014, after relocating to Oregon’s Rogue Valley, Caleb started working in the winters as a guide for Ruby Mountain Helicopter Experience. He now splits his winters between Oregon’s Wallowa Mountains and Girdwood, AK. In the Wallowas, Caleb works as an avalanche forecaster and teaches AIARE courses for the Wallowa Avalanche Center- as well as ski guides for Eagle Cap Mountain Guides. While in Alaska, Caleb heli ski guides for Chugach Powder Guides. He is working his way to become a certified ski guide through the AMGA, is a professional member of the American Avalanche Association, and is a guide member of Heliski US. While there is no snow on the ground, Caleb enjoys long trail runs with his dog Arlo and riding his dirtbike with his wife Stephani.",
  },
  {
    name: 'Dom Baker',
    images: ['/images/dom1.jpg', '/images/dom2.jpg', '/images/dom3.jpg'],
    description: "Dom Baker grew up in Victoria, BC and spent most of his time there staring at the snowy peaks of the Olympic Mountains of Washington state. After ski bumming a bit in BC and NZ and working in a cat skiing lodge for a while he became a ski patroller and then avalanche forecaster at Whitewater Resort near Nelson, BC. Eventually he got a job as an avalanche worker with the BC Ministry of Transportation, a job that keeps him learning and engaged to this day. In his spare time you'll probably find him skiing or biking with his wife and kids or exploring the backcountry somewhere.",
  },
  {
    name: 'Sean Zimmerman-Wall',
    images: ['/images/sean1.jpg', '/images/sean2.jpg', '/images/sean3.jpg'],
    description:
      'Sean is a father and lifelong learner. Living in Utah for almost two decades, he has worked extensively in ski area and mechanized guiding operations. Sean’s values include helping others and creating things that endure. He is a founding member of Snowbird Ski Patrol’s Peer Support Team and is grateful to have the opportunity to help his fellow patrollers stay in the Green. Additional roles Sean fulfills include the management of AIARE’s professional avalanche education program and operational oversight for the delivery of courses. He served three consecutive terms on the American Avalanche Association Board of Trustees and is now moving to volunteerism in his children’s school system.',
  },
  {
    name: 'Brooke Edwards',
    images: ['/images/brookeE1.jpg', '/images/brookeE2.jpg', '/images/brookeE3.jpg'],
    description: `Brooke hails from the Great Pacific Northwest where her passion for all things outdoors was born. Calling Girdwood, Alaska her home for the last 28 years, she could always be found year-round exploring and guiding the mountains and rivers of that vast wilderness. Recently Brooke chose to return to her home state of Washington to be close to family. Brooke loves sharing her passion for skiing by being an avalanche educator, a ski guide, and a PSIA Level III ski instructor. Brooke has been a career guide and educator for 30 years. She brings an enthusiasm for the conservation of wild spaces and a joy of being humbled by what wild places have to offer to her guiding craft. Brooke is currently shifting her guiding career to one of resiliency coaching via her own LLC, Wild World Wanderings: <a href="http://www.wildworldwanderings.com" target="_blank" rel="noopener noreferrer">Wild World Wanderings</a>.`,
  },
  {
    name: 'Matthias Walcher',
    images: ['/images/matthias1.jpg', '/images/matthias2.jpg', '/images/matthias3.jpg'],
    description:
      'Matthias is a graduate of the University of Natural Resources and Life Sciences in Vienna and the SFU in Canada, where he specialized in alpine natural hazards - specifically in snow and avalanches. He has already worked professionally in South and North America as well as for various European avalanche warning services. Currently he is the Operations Manager of the Austrian Association for Snow and Avalanches, is involved in the training of the Tyrolean Avalanche Commissions and works on different projects in Austria and abroad.',
  },
  {
    name: 'Sara Boilen',
    images: ['/images/sara1.jpeg', '/images/sara2.jpg'],
    description: 'Sara Boilen holds a doctorate in clinical psychology from the University of Denver (2011). Professionally, she works with individuals who have had interactions with the justice system often in the spirit of helping to make sense of behavior and context. She has taken her professional interests and merged it with her recreational interests to contribute to the field of avalanche sciences in her free time. She is specifically interested in human-related problems and solutions. Dr. Boilen has presented at seven Snow and Avalanche Workshops and at ISSW in Norway. She has written articles for The Avalanche Review and was a co-author on the recently proposed conceptual framework for human factors in avalanche terrain. She lives in Northwest Montana and will carry dessert for you to the top of any mountain her skills will take her to.',
  },
  {
    name: 'Brooke Maush',
    images: ['/images/brookeM1.jpg', '/images/brookeM2.jpg', '/images/brookeM3.jpg'],
    description:
      'Sean is a father and lifelong learner. Living in Utah for almost two decades, he has worked extensively in ski area and mechanized guiding operations. Sean’s values include helping others and creating things that endure. He is a founding member of Snowbird Ski Patrol’s Peer Support Team and is grateful to have the opportunity to help his fellow patrollers stay in the Green. Additional roles Sean fulfills include the management of AIARE’s professional avalanche education program and operational oversight for the delivery of courses. He served three consecutive terms on the American Avalanche Association Board of Trustees and is now moving to volunteerism in his children’s school system.',
  },
  {
    name: 'Jason Antin',
    images: ['/images/jason1.jpg', '/images/jason2.jpg', '/images/jason3.jpg'],
    description:
      "Originally from Massachusetts and now based in Colorado, Jason Antin is a highly accomplished IFMGA internationally licensed mountain guide, avalanche educator, and endurance athlete. As a host of The Avalanche Hour Podcast, Jason shares his expertise and passion for snow science, mountain safety, and the human stories behind avalanche education and backcountry exploration.Jason began his professional career on snow as a snowboard instructor at Nashoba Valley Ski Area in Massachusetts. Today, he is a Recreational and Professional Avalanche Instructor with the American Avalanche Institute (AAI) and a Course Leader for the American Institute for Avalanche Research and Education (AIARE). With over 20 years of professional backcountry experience, Jason specializes in risk management and wilderness medicine, helping others navigate the challenges of mountain environments. His adventurous spirit has taken him on remarkable feats, such as summiting Denali twice in a single week (including via the Cassin Ridge), climbing The Nose of El Capitan in under 24 hours, and completing endurance challenges like the Rainier Infinity Loop, the Orizaba Rodeo, and the Cascades Trifecta—skiing Mount Rainier, Mount Adams, and Mount Hood in a single day. In addition to guiding, Jason coaches athletes at The Alpine Training Center in Boulder, CO, and through the Uphill Athlete team, preparing individuals from around the globe physically and mentally for their mountain pursuits. He is also known for his Beat Monday project, which showcases creative weekend adventures and has been featured on Outside TV. At home in Golden, CO, Jason balances his adventurous career with family life. He enjoys sharing his love of the outdoors with his wife, Jenny, and their two daughters, Avery and Andora. Whether on trails, rock, ice, or snow, Jason’s mission is clear: to inspire and equip others to explore the mountains safely and confidently.",
  },
  {
    name: 'Jake Hutchinson',
    images: ['/images/jake1.jpg', '/images/jake2.jpg', '/images/jake3.jpg'],
    description:
      "Originally from Massachusetts and now based in Colorado, Jason Antin is a highly accomplished IFMGA internationally licensed mountain guide, avalanche educator, and endurance athlete. As a host of The Avalanche Hour Podcast, Jason shares his expertise and passion for snow science, mountain safety, and the human stories behind avalanche education and backcountry exploration.Jason began his professional career on snow as a snowboard instructor at Nashoba Valley Ski Area in Massachusetts. Today, he is a Recreational and Professional Avalanche Instructor with the American Avalanche Institute (AAI) and a Course Leader for the American Institute for Avalanche Research and Education (AIARE). With over 20 years of professional backcountry experience, Jason specializes in risk management and wilderness medicine, helping others navigate the challenges of mountain environments. His adventurous spirit has taken him on remarkable feats, such as summiting Denali twice in a single week (including via the Cassin Ridge), climbing The Nose of El Capitan in under 24 hours, and completing endurance challenges like the Rainier Infinity Loop, the Orizaba Rodeo, and the Cascades Trifecta—skiing Mount Rainier, Mount Adams, and Mount Hood in a single day. In addition to guiding, Jason coaches athletes at The Alpine Training Center in Boulder, CO, and through the Uphill Athlete team, preparing individuals from around the globe physically and mentally for their mountain pursuits. He is also known for his Beat Monday project, which showcases creative weekend adventures and has been featured on Outside TV. At home in Golden, CO, Jason balances his adventurous career with family life. He enjoys sharing his love of the outdoors with his wife, Jenny, and their two daughters, Avery and Andora. Whether on trails, rock, ice, or snow, Jason’s mission is clear: to inspire and equip others to explore the mountains safely and confidently.",
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
        {/* Render the description with HTML */}
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: person.description }}
        />
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
              width: 200, // Adjust image size
              height: 200,
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