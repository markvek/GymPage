import { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // 900px
    const isWideScreen = useMediaQuery(theme.breakpoints.up('lg')); // 1200px

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'Free Trial', path: '/free-trial' },
        { title: 'Schedule', path: '/schedule' },
        { title: 'Our Trainers', path: '/trainers' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1 }}>
                <Typography variant="h6" component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    POWER GYM
                </Typography>
                <IconButton color="inherit" onClick={handleDrawerToggle} edge="end">
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            sx={{
                                textAlign: 'center',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                }
                            }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/signin"
                        sx={{
                            textAlign: 'center',
                            mt: 1,
                            mx: 2,
                            border: 1,
                            borderColor: 'primary.main',
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white'
                            }
                        }}
                    >
                        <ListItemText primary="Sign In" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default'
            }}
        >
            <Container maxWidth={isWideScreen ? 'xl' : 'lg'}>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: { xs: 56, sm: 64, md: 72 },
                        px: { xs: 1, sm: 2 }
                    }}
                >
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            mr: 4,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: { xs: '1.2rem', sm: '1.5rem' }
                        }}
                    >
                        POWER GYM
                    </Typography>

                    {isMobile ? (
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <>
                            <Box sx={{
                                flexGrow: 1,
                                display: 'flex',
                                gap: { sm: 2, md: 4 },
                                justifyContent: { sm: 'center', md: 'flex-start' }
                            }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.title}
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            color: 'inherit',
                                            fontSize: { sm: '0.9rem', md: '1rem' },
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                            }
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                ))}
                            </Box>
                            <Button
                                component={Link}
                                to="/signin"
                                variant="outlined"
                                sx={{
                                    ml: { sm: 1, md: 2 },
                                    fontSize: { sm: '0.9rem', md: '1rem' }
                                }}
                            >
                                Sign In
                            </Button>
                        </>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: { xs: '100%', sm: 300 }
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar; 