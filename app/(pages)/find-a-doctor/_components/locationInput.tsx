"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';

interface LocationInputProps {
  onSelect: ( userLocation: GeolocationCoordinates | string | undefined) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onSelect }) => {
  const [showLocationButton, setShowLocationButton] = useState<boolean>(false);
  const [placeholderValue, setPlaceholderValue] = useState<string>();
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserLocation(value);
    setPlaceholderValue(value)
    setShowLocationButton(false);
  };

  function getUserLocation(){
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = position.coords;
          setUserLocation(location);
          setPlaceholderValue('Current Location')
          // console.log("Accuracy:", accuracy, "meters");
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }

  const handleInputClick = () => {
    setShowLocationButton(!showLocationButton);
  };

  useEffect(() => {
    onSelect(userLocation);
  }, [userLocation, placeholderValue]);

  return (
    <div className='ml-5'>
      <Input
        type="number"
        onChange={handleInputChange}
        onClick={handleInputClick}
        placeholder={placeholderValue || 'Zip Code / Current Location'}
      />
      {showLocationButton && (
        <Button className='mt-1 bg-white text-black' onClick={getUserLocation}>Allow Current Location</Button>
      )}
    </div>
  );
};

export default LocationInput;
