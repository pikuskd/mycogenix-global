import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        backgroundColor: '#43A047', // lighter green than default primary
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection('#home')}
        >
          <Avatar
            src={process.env.PUBLIC_URL + '/MycoGenix_Global_Logo.jpeg'}
            alt="MycoGenix Logo"
            sx={{
              width: 50,
              height: 50,
              border: '2px solid white',
              mr: 1.5,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'white',
              userSelect: 'none',
            }}
          >
            MycoGenix Global
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              color="inherit"
              onClick={() => scrollToSection(item.href)}
              sx={{ fontWeight: 600 }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
