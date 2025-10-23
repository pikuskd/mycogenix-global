import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import NatureIcon from '@mui/icons-material/Nature';
import ScienceIcon from '@mui/icons-material/Science';

const About = () => {
  const stats = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
      number: '500+',
      label: 'Farmers Trained',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
      number: '50+',
      label: 'Training Programs',
    },
    {
      icon: <NatureIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
      number: '1000+',
      label: 'Mushrooms Produced',
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
      number: '3',
      label: 'Core Sectors',
    },
  ];

  const features = [
    {
      title: 'Innovative Production',
      description:
        'We use cutting-edge technology and sustainable practices to produce high-quality mushrooms for commercial markets.',
    },
    {
      title: 'Comprehensive Training',
      description:
        'Our expert-led training programs equip farmers with the knowledge and skills needed for successful mushroom cultivation.',
    },
    {
      title: 'Community Support',
      description:
        'We provide free training and ongoing support to help local farming communities thrive and grow.',
    },
  ];

  return (
    <Box id="about" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F8F9FA' }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              About MycoGenix Global
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              We are a pioneering Agri-tech company dedicated to revolutionizing
              mushroom cultivation through innovation, education, and community
              empowerment.
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: 3,
              mb: 8,
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  flex: '1 1 230px',
                  maxWidth: '260px',
                  display: 'flex',
                }}
              >
                <Card
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    backgroundColor: 'white',
                    borderRadius: 3,
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        mx: 'auto',
                        mb: 2,
                        backgroundColor: 'rgba(46, 125, 50, 0.1)',
                      }}
                    >
                      {stat.icon}
                    </Avatar>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                        fontSize: '1.6rem',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: 3,
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  flex: '1 1 300px',
                  maxWidth: '350px',
                  display: 'flex',
                }}
              >
                <Card
                  sx={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 2,
                        fontSize: '1.2rem',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                      }}
                    >
                      {feature.description}
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

export default About;
