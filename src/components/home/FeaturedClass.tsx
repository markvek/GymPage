import { Box, Button, Container, Grid, Typography, Avatar } from '@mui/material';
import type { GridProps } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';

const GridItem = (props: GridProps) => <Grid {...props} />;

const FeaturedClass = () => {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: 'white'
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
                    Featured Class
                </Typography>
                <Grid container spacing={4} alignItems="center">
                    <GridItem item xs={12} md={6}>
                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: '300px', md: '400px' },
                                backgroundColor: 'grey.200',
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: { xs: 2, md: 0 }
                            }}
                        >
                            <Typography variant="h6" color="text.secondary">
                                Class Image Placeholder
                            </Typography>
                        </Box>
                    </GridItem>
                    <GridItem item xs={12} md={6}>
                        <Box sx={{ p: { xs: 2, md: 4 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Avatar
                                    src="/placeholder-teacher.jpg"
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        mr: 2,
                                        backgroundColor: 'grey.300'
                                    }}
                                />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                                        Power Yoga Flow
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        with Sarah Johnson
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="body1">
                                        Monday & Wednesday, 9:00 AM - 10:15 AM
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="body1">
                                        5 spots remaining
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography variant="body1" sx={{ mb: 3 }}>
                                Experience a dynamic blend of strength and flexibility training in this
                                energizing Power Yoga class. Perfect for all skill levels.
                            </Typography>

                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Try Free Trial
                            </Button>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default FeaturedClass; 