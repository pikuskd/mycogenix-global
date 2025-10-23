import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        background:
          'linear-gradient(180deg, #1B5E20 0%, #2E7D32 70%, #388E3C 100%)',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="space-between">
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar
                  src={process.env.PUBLIC_URL + '/MycoGenix_Global_Logo.jpeg'}
                  sx={{
                    width: 60,
                    height: 60,
                    border: '2px solid white',
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  MycoGenix Global
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  mb: 3,
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.7,
                }}
              >
                Revolutionizing mushroom agriculture through innovation,
                education, and sustainable community support.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ fontSize: 18, color: '#FFD700' }} />
                  <Typography variant="body2">
                    mycogenixglobal@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ fontSize: 18, color: '#FFD700' }} />
                  <Typography variant="body2">+91-6372441590</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: '#FFD700' }} />
                  <Typography variant="body2">
                    Saharsha, Bihar, India
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Quick Links
            </Typography>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                sx={{
                  display: 'block',
                  mb: 1,
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  '&:hover': { color: '#FFD700', pl: 0.5 },
                  transition: 'all 0.3s ease',
                }}
              >
                {link.name}
              </Link>
            ))}
          </Grid>

          {/* Socials */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      backgroundColor: '#FFD700',
                      color: '#1B5E20',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontStyle: 'italic',
              }}
            >
              “Cultivating the Future of Sustainable Agriculture”
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            mt: 5,
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} MycoGenix Global. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="#"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                '&:hover': { color: '#FFD700' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                '&:hover': { color: '#FFD700' },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
