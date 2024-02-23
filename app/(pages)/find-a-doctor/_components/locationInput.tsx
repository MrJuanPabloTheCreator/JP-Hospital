"use client"

import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface LocationInputProps {
  onSelect: ( userLocation: GeolocationCoordinates | string | undefined) => void,
  style: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ onSelect, style }) => {
  const params = useSearchParams()
  const postalCode = params.get('zip-code')

  const [showLocationButton, setShowLocationButton] = useState<boolean>(false);
  const [placeholderValue, setPlaceholderValue] = useState<string>(postalCode ? postalCode : 'Current Location');
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | string>(postalCode ? postalCode : 'Current Location');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserLocation(value);
    if (!value.trim()) {
      setPlaceholderValue('Current Location');
    }
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

  useEffect(() => {
    onSelect(userLocation);
  }, [userLocation, placeholderValue]);

  return (
    <div className='flex flex-col'>
      <input
        onChange={handleInputChange}
        onClick={() => setShowLocationButton(!showLocationButton)}
        placeholder={placeholderValue ? placeholderValue : 'Zip Code / Current Location'}
        className={`w-full ${style} pl-2 py-2`}
      />
      {showLocationButton && (
        <Button className='absolute mt-12 w-[290px] bg-white text-black hover:text-white' onClick={() => (getUserLocation(), setShowLocationButton(!showLocationButton))}>Allow Current Location</Button>
      )}
    </div>
  );
};

export default LocationInput;
