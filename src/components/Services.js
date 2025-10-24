import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SchoolIcon from '@mui/icons-material/School';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services = () => {
  const services = [
    {
      icon: <AgricultureIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Mushroom Production',
      description:
        'Fully automated mushroom cultivation using cutting-edge technology and sustainable practices.',
      features: [
        'Commercial-scale production',
        'Quality control systems',
        'Sustainable farming methods',
        'Market-ready products',
      ],
      color: 'primary',
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'Online Consultancy Services',
      description:
        'We provide online consultancy services to help farmers with mushroom cultivation and business development.',
      features: [
        'Online consultations',
        'Business development support',
        'Market analysis',
        'Ongoing support',
      ],
      color: 'secondary',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Farmer Support',
      description:
        'Free training and support programs to help local farming communities succeed in mushroom cultivation.',
      features: [
        'Free training sessions',
        'Community workshops',
        'Technical assistance',
        'Market connections',
      ],
      color: 'primary',
    },
  ];

  return (
    <Box id="services" sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
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
              Our Services
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
              We offer comprehensive solutions across three core sectors to
              revolutionize mushroom agriculture and support farming communities.
            </Typography>
          </Box>
        </motion.div>

        {/* Services Cards (Flex Layout) */}
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
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                flex: '1 1 300px',
                maxWidth: '360px',
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  borderRadius: 3,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      service.color === 'primary'
                        ? 'rgba(46, 125, 50, 0.1)'
                        : 'rgba(255, 111, 0, 0.1)',
                    py: 3,
                    textAlign: 'center',
                  }}
                >
                  {service.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      mt: 1,
                      fontWeight: 700,
                      color:
                        service.color === 'primary'
                          ? 'primary.main'
                          : 'secondary.main',
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>

                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                        minHeight: '60px',
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Box>
                      {service.features.map((feature, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 1,
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              fontSize: 18,
                              color:
                                service.color === 'primary'
                                  ? 'primary.main'
                                  : 'secondary.main',
                              mr: 1,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.primary',
                              fontWeight: 500,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      fontWeight: 600,
                      borderRadius: 2,
                      backgroundColor:
                        service.color === 'primary'
                          ? 'primary.main'
                          : 'secondary.main',
                      '&:hover': {
                        backgroundColor:
                          service.color === 'primary'
                            ? 'primary.dark'
                            : 'secondary.dark',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
              borderRadius: 3,
              textAlign: 'center',
              py: 6,
              px: 3,
              color: 'white',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
            >
              Ready to Start Your Mushroom Journey?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Join hundreds of successful farmers who have transformed their
              agricultural practices with our innovative mushroom cultivation
              methods.
            </Typography>
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
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: '#E65100',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 25px rgba(255, 111, 0, 0.3)',
                },
              }}
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get Started Today
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
