import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';

const Team = () => {
  const teamMembers = [
    {
      name: 'Soumya Kanta Das',
      role: 'Founder',
      description:
        'Computer Science graduate from NIT Rourkela with extensive experience at tech giants like Amazon, Salesforce, and SAP Labs. Software developer by profession, bringing cutting-edge technology solutions to agricultural innovation.',
      avatar: 'Soumya_Kanta_Das_Pic.jpg',
      color: 'primary',
      icon: <BusinessIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      achievements: [
        // 'NIT Rourkela Graduate',
        // 'Tech Giant Experience',
        // 'Software Development Expert',
      ],
    },
    {
      name: 'Akshat Parag',
      role: 'Founder & Director',
      description:
        'Electronics and Instrumentation graduate from NIT Rourkela, currently working as a Software Developer at Analog Devices. Specializes in hardware-software integration for agricultural automation and precision farming solutions.',
      avatar: 'Akshat_Parag_Pic.jpeg',
      avatarPosition: 'center 5%',
      color: 'secondary',
      icon: <ScienceIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
      achievements: [
        // 'NIT Rourkela Graduate',
        // 'Analog Devices',
        // 'Hardware-Software Integration',
      ],
    },
    {
      name: 'Akshay Prasoon',
      role: 'Co-Founder & Chief Operations Officer',
      description:
        'Operations specialist focused on training programs and community development initiatives. Dedicated to bringing innovative mushroom cultivation techniques to farming communities across India.',
      avatar: 'Akshay_Prasoon_Pic.jpeg',
      avatarPosition: 'center 10%',
      color: 'primary',
      icon: <SchoolIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      achievements: [
        // 'Community Development',
        // 'Training Programs',
        // 'Operations Excellence',
      ],
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description:
        'We continuously push the boundaries of mushroom cultivation technology.',
    },
    {
      title: 'Education',
      description:
        'We believe in empowering farmers through knowledge and training.',
    },
    {
      title: 'Community',
      description:
        'We are committed to supporting local farming communities.',
    },
    {
      title: 'Sustainability',
      description:
        'We promote environmentally responsible agricultural practices.',
    },
  ];

  return (
    <Box
      id="team"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                mb: 3,
                fontSize: { xs: '2.2rem', md: '3rem' },
              }}
            >
              Meet Our Team
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '850px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Our leadership team combines deep agricultural knowledge with
              world-class technical expertise to drive innovation in mushroom
              cultivation and empower local farmers.
            </Typography>
          </Box>
        </motion.div>

        {/* === Team Cards === */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            mb: 10,
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ flex: '1 1 320px', maxWidth: '340px', display: 'flex' }}
            >
              <Card
                sx={{
                  flex: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    pt: 4,
                    pb: 2,
                    px: 2,
                    background:
                      member.color === 'primary'
                        ? 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)'
                        : 'linear-gradient(135deg, #FF6F00 0%, #FFA726 100%)',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                >
                  <Avatar
                    src={process.env.PUBLIC_URL + '/' + member.avatar}
                    alt={member.name}
                    sx={{
                      width: 100,
                      height: 100,
                      mx: 'auto',
                      mb: 1,
                      border: '3px solid white',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      '& img': {
                        objectFit: 'cover',
                        objectPosition: member.avatarPosition || 'center center',
                      },
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    {member.icon}
                  </Box>
                </Box>

                <CardContent sx={{ px: 3, pb: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Chip
                    label={member.role}
                    sx={{
                      backgroundColor:
                        member.color === 'primary'
                          ? 'primary.main'
                          : 'secondary.main',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      mb: 2,
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                      fontSize: '0.95rem',
                    }}
                  >
                    {member.description}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'center',
                    }}
                  >
                    {member.achievements.map((a, i) => (
                      <Chip
                        key={i}
                        label={a}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(46,125,50,0.1)',
                          color: 'primary.main',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* === Company Values Section === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              These values define who we are and how we aim to transform the
              agricultural ecosystem.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 3,
              mt: 4,
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{
                  flex: '1 1 250px',
                  maxWidth: '280px',
                  display: 'flex',
                }}
              >
                <Card
                  sx={{
                    flex: 1,
                    p: 3,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 2,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontSize: '0.9rem',
                      }}
                    >
                      {value.description}
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

export default Team;
