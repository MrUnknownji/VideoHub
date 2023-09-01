import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/A.jpg';
import img2 from '../assets/B.jpg';
import img3 from '../assets/C.jpg';
import img4 from '../assets/D.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          m={'auto'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to VideoHub! Our mission is to provide you with a seamless
            and immersive video experience. With our cutting-edge technology, we
            offer a range of services that cater to all your video needs. From
            lightning-fast video streaming to crystal-clear playback, VideoHub
            ensures you never miss a single detail. Whether you're a content
            creator, a viewer, or both, our platform guarantees a user-friendly
            interface and top-notch performance. Dive into a world of videos
            like never before, where quality and convenience go hand in hand.
            Join us on VideoHub and elevate your video journey!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'80vh'}>
        <Img src={img1} objectFit={'cover'} w={'100%'} h={'100%'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Lights, Camera, Action!
        </Heading>
      </Box>
      <Box w={'full'} h={'80vh'}>
        <Img src={img2} objectFit={'cover'} w={'100%'} h={'100%'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Unleash Your Creativity
        </Heading>
      </Box>
      <Box w={'full'} h={'80vh'}>
        <Img src={img3} objectFit={'cover'} w={'100%'} h={'100%'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Your Stories, Your Way
        </Heading>
      </Box>
      <Box w={'full'} h={'80vh'}>
        <Img src={img4} objectFit={'cover'} w={'100%'} h={'100%'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Empowering Voices, Sharing Wisdom
        </Heading>
      </Box>
    </Carousel>
  );
};
export default Home;
