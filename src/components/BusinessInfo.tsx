import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const BusinessInfo: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-122.4194, 37.7749], // San Francisco coordinates
                zoom: 12
            });

            // Add marker for the gym location
            new mapboxgl.Marker()
                .setLngLat([-122.4194, 37.7749])
                .addTo(map.current);
        }

        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, []);

    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
                Visit Our Gym
            </Typography>
            <Box
                ref={mapContainer}
                sx={{
                    height: 400,
                    width: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3
                }}
            />
        </Container>
    );
};

export default BusinessInfo; 