import { Box, Container, GridLegacy as Grid, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

const Values = () => {
    const values = [
        {
            icon: <FitnessCenterIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
            title: 'Expert Guidance',
            subtitle: 'Train with certified professionals who are passionate about your success'
        },
        {
            icon: <GroupIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
            title: 'Supportive Community',
            subtitle: 'Join a welcoming family of fitness enthusiasts who inspire and motivate'
        },
        {
            icon: <StarIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
            title: 'Results-Driven',
            subtitle: 'Achieve your fitness goals through proven methods and personalized attention'
        }
    ];

    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: 'grey.50'
            }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        mb: { xs: 4, md: 6 },
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 600
                    }}
                >
                    Our Values
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {values.map((value, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <Box
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                {value.icon}
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 600
                                    }}
                                >
                                    {value.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.6
                                    }}
                                >
                                    {value.subtitle}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Values; 