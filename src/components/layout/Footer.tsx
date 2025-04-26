import { Box, Container, IconButton, Link, Typography, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'grey.900',
                color: 'white',
                py: { xs: 4, sm: 6, md: 8 },
                mt: 'auto',
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: { xs: 4, sm: 6, md: 8 },
                        justifyContent: { xs: 'center', md: 'space-between' },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    {/* Brand Section */}
                    <Box
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 300px' },
                            maxWidth: { xs: '100%', sm: '400px' }
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '1.5rem', sm: '1.75rem' },
                                mb: { xs: 2, sm: 3 }
                            }}
                        >
                            POWER GYM
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                mb: 3,
                                opacity: 0.9,
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                lineHeight: 1.6
                            }}
                        >
                            Transform your life through fitness with our expert trainers and state-of-the-art facilities.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                justifyContent: { xs: 'center', md: 'flex-start' }
                            }}
                        >
                            <IconButton
                                color="inherit"
                                aria-label="Facebook"
                                sx={{
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                aria-label="Instagram"
                                sx={{
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                aria-label="Twitter"
                                sx={{
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Links Section */}
                    <Box
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 200px' },
                            maxWidth: { xs: '100%', sm: '200px' }
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                mb: { xs: 2, sm: 3 }
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                alignItems: { xs: 'center', md: 'flex-start' }
                            }}
                        >
                            {['Free Trial', 'Class Schedule', 'Our Trainers', 'Member Login'].map((text) => (
                                <Link
                                    key={text}
                                    href={`/${text.toLowerCase().replace(' ', '-')}`}
                                    color="inherit"
                                    sx={{
                                        textDecoration: 'none',
                                        fontSize: { xs: '0.9rem', sm: '1rem' },
                                        '&:hover': {
                                            color: 'primary.main',
                                            textDecoration: 'none',
                                            transform: 'translateX(5px)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {text}
                                </Link>
                            ))}
                        </Box>
                    </Box>

                    {/* Contact Section */}
                    <Box
                        id="address"
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 300px' },
                            maxWidth: { xs: '100%', sm: '300px' }
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                mb: { xs: 2, sm: 3 }
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                alignItems: { xs: 'center', md: 'flex-start' }
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    '&:hover': {
                                        transform: 'translateX(5px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <LocationOnIcon color="primary" />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: '0.9rem', sm: '1rem' }
                                    }}
                                >
                                    520 Waller St<br />
                                    San Francisco, CA 94117
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    '&:hover': {
                                        transform: 'translateX(5px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <PhoneIcon color="primary" />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: '0.9rem', sm: '1rem' }
                                    }}
                                >
                                    (555) 123-4567
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    '&:hover': {
                                        transform: 'translateX(5px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <EmailIcon color="primary" />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: '0.9rem', sm: '1rem' }
                                    }}
                                >
                                    info@powergym.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Typography
                    variant="body2"
                    sx={{
                        mt: { xs: 4, sm: 6 },
                        textAlign: 'center',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        opacity: 0.8
                    }}
                >
                    © {new Date().getFullYear()} Power Gym. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer; 