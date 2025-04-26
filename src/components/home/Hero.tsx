import { Box, Button, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const scrollToAddress = () => {
        // Add smooth scroll to address section
        const element = document.getElementById('address');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box
            sx={{
                height: { xs: '90vh', md: '80vh' },
                position: 'relative',
                background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), linear-gradient(45deg, #1976d2, #9c27b0)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                width: '100%',
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 4, sm: 6, md: 8 },
                }}
            >
                <Box
                    sx={{
                        maxWidth: {
                            xs: '100%',
                            sm: '80%',
                            md: '800px',
                            lg: '1000px',
                            xl: '1200px'
                        },
                        textAlign: { xs: 'center', md: 'left' },
                        ml: { xs: 'auto', md: 0 },
                        mr: { xs: 'auto', md: 0 },
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {
                                xs: '2rem',
                                sm: '2.75rem',
                                md: '3.5rem',
                                lg: '4rem',
                                xl: '5rem'
                            },
                            fontWeight: 700,
                            mb: { xs: 2, sm: 3 },
                            lineHeight: { xs: 1.2, md: 1.1 },
                        }}
                    >
                        Transform Your Life Through Fitness
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: { xs: 3, sm: 4 },
                            opacity: 0.9,
                            fontSize: {
                                xs: '1.1rem',
                                sm: '1.25rem',
                                md: '1.5rem',
                                lg: '1.75rem',
                                xl: '2rem'
                            },
                            maxWidth: { xs: '100%', md: '80%' },
                            mx: { xs: 'auto', md: 0 }
                        }}
                    >
                        Join our community and achieve your fitness goals with expert guidance
                    </Typography>
                    <Button
                        variant="contained"
                        size={isMobile ? "medium" : "large"}
                        sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            px: { xs: 4, sm: 6, md: 8 },
                            py: { xs: 1.5, sm: 2, md: 2.5 },
                            fontSize: {
                                xs: '1rem',
                                sm: '1.1rem',
                                md: '1.2rem',
                                lg: '1.3rem',
                                xl: '1.4rem'
                            },
                            '&:hover': {
                                backgroundColor: 'grey.100',
                                transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        }}
                    >
                        Start Free Trial
                    </Button>
                </Box>
            </Container>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: { xs: 20, sm: 40 },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateX(-50%) translateY(-5px)',
                    },
                }}
                onClick={scrollToAddress}
            >
                <Typography
                    variant="body1"
                    sx={{
                        mb: 1,
                        fontSize: {
                            xs: '0.9rem',
                            sm: '1rem',
                            lg: '1.1rem',
                            xl: '1.2rem'
                        },
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >
                    Find Us
                </Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        fontSize: {
                            xs: 30,
                            sm: 40,
                            lg: 48,
                            xl: 56
                        },
                        animation: 'bounce 2s infinite',
                        '@keyframes bounce': {
                            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                            '40%': { transform: 'translateY(-20px)' },
                            '60%': { transform: 'translateY(-10px)' },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Hero; 