import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on typing
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch('https://formspree.io/f/movkgrva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setOpenDialog(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        if (errorData?.errors) {
          const backendErrors = {};
          errorData.errors.forEach((err) => {
            backendErrors[err.field] = err.message;
          });
          setErrors(backendErrors);
        } else {
          setOpenSnackbar(true);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setOpenSnackbar(true);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email Us',
      details: 'mycogenixglobal@gmail.com',
      description: 'We’ll respond within 24 hours.',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Call Us',
      details: '+91-6372441590',
      description: 'Mon–Fri from 9am to 6pm.',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Visit Us',
      details: 'Saharsha, Bihar, India',
      description: 'Come visit our innovation center.',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
                fontSize: { xs: '2.3rem', md: '3rem' },
              }}
            >
              Let’s Connect
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
              Whether you’re curious about our products, collaborations, or
              mushroom farming support — we’d love to hear from you.
            </Typography>
          </Box>
        </motion.div>

        {/* === Contact Info Cards === */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            mb: 10,
          }}
        >
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{
                flex: '1 1 280px',
                maxWidth: '300px',
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 18px 40px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{info.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}
                >
                  {info.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1,
                  }}
                >
                  {info.details}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {info.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* === Contact Form === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                borderRadius: 4,
                boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 4,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
              >
                Send Us a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      error={!!errors.phone}
                      helperText={errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                      error={!!errors.message}
                      helperText={errors.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        mt: 2,
                        px: 8,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        background:
                          'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                        '&:hover': {
                          background:
                            'linear-gradient(135deg, #256528 0%, #388E3C 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 10px 25px rgba(46,125,50,0.3)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Box>
        </motion.div>

        {/* Snackbar for network or unknown error */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="error"
            sx={{ width: '100%' }}
          >
            Oops! Something went wrong. Please try again.
          </Alert>
        </Snackbar>

        {/* Thank You Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle sx={{ color: 'primary.main', fontWeight: 700 }}>
            🎉 Thank You!
          </DialogTitle>
          <DialogContent>
            <Typography sx={{ mt: 1 }}>
              Your message has been sent successfully. We’ll get back to you
              soon.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} variant="contained">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Contact;
