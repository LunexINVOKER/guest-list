import { useState, useEffect} from "react";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";
import { fetchGuests } from "./api";


export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);


  // ==============================================================================================//

useEffect(() => {
  async function loadGuests() {
    const data = await fetchGuests();
    setGuests(data);
  }
  loadGuests();
}, []);

  // ==============================================================================================//
  return <div className="app">
    {selectedGuest === null ? 
    <GuestList guests = {guests} onSelect={setSelectedGuest}/> 
    : 
    <GuestDetails guest = {selectedGuest} onBack={() =>setSelectedGuest(null)}/>}
  </div>;
}



