import { useState, createContext } from 'react';

const AccommodationContext = createContext();
export default AccommodationContext;

export function AccommodationProvider({ children }) {
  const [ accommodationOption, setAccomodationOption ] = useState({ type: null, price: null });
  
  return (
    <AccommodationContext.Provider value={{ accommodationOption, setAccomodationOption }}>
      {children}
    </AccommodationContext.Provider>
  );
}
