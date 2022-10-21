import { createContext } from 'react';
import { useState } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [userTicket, setUserTicket] = useState([]);
  return <TicketContext.Provider value={{ userTicket, setUserTicket }}>{children}</TicketContext.Provider>;
}
