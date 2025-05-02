
import React from 'react';

const Map = ({ visitedCountries }: { visitedCountries: any[] }) => {
  return (
    <div className="relative w-full h-[600px] mb-8">
      <div className="absolute inset-0 rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-full">
          {/* Static world map image */}
          <img 
            src="https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop" 
            alt="World Map" 
            className="w-full h-full object-cover"
          />
          
          {/* Location pins on the map */}
          {visitedCountries.map((country, index) => {
            // Define pin positions based on country
            let position;
            switch(country.country) {
              case 'Canada':
                position = { top: '25%', left: '20%' };
                break;
              case 'Italy':
                position = { top: '35%', left: '52%' };
                break;
              case 'United States':
                position = { top: '37%', left: '25%' };
                break;
              case 'Iceland':
                position = { top: '25%', left: '45%' };
                break;
              case 'Guatemala':
                position = { top: '48%', left: '23%' };
                break;
              default:
                return null;
            }

            return (
              <div 
                key={index}
                className="absolute w-4 h-4 bg-accent border-2 border-white rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform duration-200"
                style={position}
                title={country.country}
              >
                <div className="opacity-0 hover:opacity-100 absolute left-6 top-0 bg-white text-primary rounded-md px-2 py-1 text-sm whitespace-nowrap shadow-md z-10 pointer-events-none">
                  {country.country}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default Map;
