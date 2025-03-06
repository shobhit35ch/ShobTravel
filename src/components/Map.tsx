import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({ visitedCountries }: { visitedCountries: any[] }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'mercator',
      zoom: 1.5,
      center: [0, 20],
      interactive: false, // Disable all map interactions
    });

    map.current.on('style.load', () => {
      // Add atmosphere and fog effects
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });

      // Add visited countries layer
      visitedCountries.forEach(country => {
        // Add markers for each visited place
        const el = document.createElement('div');
        el.className = 'visited-marker';
        el.style.backgroundColor = '#E8C4A0';
        el.style.width = '15px';
        el.style.height = '15px';
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';

        // Get a central point for the country
        let center;
        switch(country.country) {
          case 'Canada':
            center = [-115.928, 51.4968];
            break;
          case 'Italy':
            center = [12.56738, 41.87194];
            break;
          case 'United States':
            center = [-95.712891, 37.09024];
            break;
          case 'Iceland':
            center = [-19.020835, 64.963051];
            break;
          default:
            return;
        }

        new mapboxgl.Marker(el)
          .setLngLat(center)
          .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<strong>${country.country}</strong><br>${country.description}`))
          .addTo(map.current!);
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [visitedCountries, mapboxToken]);

  return (
    <div className="relative w-full h-[600px] mb-8">
      {!mapboxToken && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/10 rounded-lg p-4 z-10">
          <p className="text-primary mb-2">Please enter your Mapbox public token to view the map:</p>
          <input
            type="text"
            className="px-4 py-2 border rounded"
            placeholder="Enter Mapbox token"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-sm text-primary/70 mt-2">
            Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default Map;
