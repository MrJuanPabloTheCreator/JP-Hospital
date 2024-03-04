"use client"

import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';

interface LocationInputProps {
  onSelect: ( userLocation: GeolocationCoordinates | string | void | undefined) => void,
  style: string;
}


const LocationInput: React.FC<LocationInputProps> = ({ onSelect, style }) => {
  const params = useSearchParams()
  const postalCode = params.get('zip-code')

  const [showLocationButton, setShowLocationButton] = useState<boolean>(false);
  const [placeholderValue, setPlaceholderValue] = useState<string>(postalCode ? postalCode : 'Current Location');
  const [outline, setOutline] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | string | void>(postalCode ? postalCode : getUserLocation);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserLocation(value);
    setPlaceholderValue(value);
    
    setShowLocationButton(false);
  };

  const resetInputValue = () => {
    setUserLocation('');
    setPlaceholderValue('');
  }

  const setUserLocations = (location: GeolocationCoordinates) => {
    setUserLocation(location);
    setPlaceholderValue('Current Location')
  }

  function getUserLocation(){
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = position.coords;
          setUserLocations(location)
          return location
          // console.log("Accuracy:", accuracy, "meters");      
        },
        (error) => {       
          return console.error("Error getting location:", error.message);
        }
      );
    } else {      
      return console.log("Geolocation is not supported by this browser");
    }  
  }

  useEffect(() => {
    onSelect(userLocation);
  }, [userLocation, placeholderValue]);

  
  return (
    <div className='flex flex-col'>
      <div onBlur={() => setOutline(false)} onClick={() => (setOutline(true), setShowLocationButton(!showLocationButton))} className={`flex border-2 px-2 bg-white ${style} ${outline ? 'border-black': ''}`}>
        <input
          value={placeholderValue}
          onChange={handleInputChange}
          placeholder={placeholderValue ? placeholderValue : 'Zip Code / Current Location'}
          className={`w-full py-2 outline-none`}
        />
        {placeholderValue && (
          <button onClick={() => resetInputValue()}><BsX size={24} /></button>
        )}
      </div>
      {showLocationButton && placeholderValue === '' &&(
        <Button 
          className='absolute mt-12 w-[290px] bg-slate-200 text-black hover:text-white' 
          onClick={() => (getUserLocation(), setShowLocationButton(false))}
        >
          Allow Current Location
        </Button>
      )}
    </div>
  );
};

export default LocationInput;