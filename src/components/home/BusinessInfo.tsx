import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";

// Configure the default icon for Leaflet
const defaultIcon = new Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const BusinessInfo = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Updated coordinates for 520 Waller St, San Francisco, CA 94117
    const location = {
        address: "520 Waller St, San Francisco, CA 94117",
        lat: 37.7712,
        lng: -122.4317,
    };

    return (
        <Box
            id="address"
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: 'background.paper'
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Visit Us
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                                <Typography>{location.address}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                                <Typography>(555) 123-4567</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                                <Typography>info@powergym.com</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                height: '500px',
                                overflow: 'hidden',
                                borderRadius: 2,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                            }}
                        >
                            {isMounted && (
                                <MapContainer
                                    center={[location.lat, location.lng]}
                                    zoom={16}
                                    style={{ height: '100%', width: '100%' }}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[location.lat, location.lng]} icon={defaultIcon}>
                                        <Popup>
                                            Power Gym <br />
                                            {location.address}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BusinessInfo;
