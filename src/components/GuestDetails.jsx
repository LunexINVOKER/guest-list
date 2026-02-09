export default function GuestDetails({guest, onBack}){
  return(
    <div>
      <h1>Guest Details:</h1>
      <p>{guest.name}</p>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <p>{guest.job}</p>
      <button onClick={onBack}>Back</button>
    </div>
  )
}