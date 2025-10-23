import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import NatureIcon from '@mui/icons-material/Nature';
import SchoolIcon from '@mui/icons-material/School';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const Hero = () => {
  const services = [
    {
      icon: <AgricultureIcon sx={{ fontSize: 38, color: 'primary.main' }} />,
      title: 'Mushroom Production',
      description: 'Advanced mushroom cultivation techniques for commercial production.',
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 38, color: 'secondary.main' }} />,
      title: 'Training Programs',
      description: 'Comprehensive cultivation training for aspiring farmers.',
    },
    {
      icon: <NatureIcon sx={{ fontSize: 38, color: 'primary.main' }} />,
      title: 'Farmer Support',
      description: 'Free training and support for local farming communities.',
    },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 50%, #66BB6A 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 }, // padding for fixed navbar
        pb: { xs: 6, md: 8 },
      }}
    >
      {/* Subtle Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* === HERO TEXT === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.4rem', md: '4rem' },
                lineHeight: 1.1,
              }}
            >
              Cultivating the Future of
              <Box
                component="span"
                sx={{
                  color: '#FFD700',
                  display: 'block',
                  textShadow: '0 2px 6px rgba(0,0,0,0.3)',
                }}
              >
                Mushroom Agriculture
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              MycoGenix Global is revolutionizing mushroom cultivation through
              innovative production methods, comprehensive training programs,
              and community support initiatives.
            </Typography>

            {/* === BUTTONS === */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 3,
                mt: 4,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#FF6F00',
                    color: 'white',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#E65100',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(255, 111, 0, 0.3)',
                    },
                  }}
                  onClick={() =>
                    document
                      .querySelector('#services')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Explore Services
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                  onClick={() =>
                    document
                      .querySelector('#contact')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get Started
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        {/* === SERVICES MINI-CARDS === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: 3,
              mt: 8,
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                style={{
                  flex: '1 1 280px',
                  maxWidth: '320px',
                  display: 'flex',
                }}
              >
                <Card
                  sx={{
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 14px 35px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                        fontSize: '1.2rem',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
