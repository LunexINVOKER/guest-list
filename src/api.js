const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2601-FTB-ET-WEB-FT/guests";

export async function fetchGuests() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.data;
}