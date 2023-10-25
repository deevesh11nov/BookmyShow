import React from "react";

export default function LastestTicketDetail(props) {
  const { finishLoading, LatestBookedPresent, seat, timing, movieName ,errorMsg} = props;   //destructing prop0s

  const seatLabels = [
    { label: 'A1', key: 'a1' },
    { label: 'A2', key: 'a2' },
    { label: 'A3', key: 'a3' },
    { label: 'A4', key: 'a4' },
    { label: 'D1', key: 'd1' },
    { label: 'D2', key: 'd2' },
  ]
  return (
    <div className="LatestBooked" style={{border:"none"}}>
      <h4 className="Header-Container">Booking Details</h4>

      {/* Check if there are any previous bookings */}
            {finishLoading && LatestBookedPresent === false && errorMsg &&  (
        <div>
          <h3 className="Error_messages">{`${errorMsg}`}</h3>   {/* Display a message when no previous booking is found */}
        </div>
      )}
{/* when last booking data is present and data fetching is finish*/}
      {LatestBookedPresent && finishLoading && (
        <div>
            <div className="Heading-Detail">Seats:</div>
            <div className="book-seating-wrapper">
            {/* map function for seat label */}
            {seatLabels.map(({label,key})=>(
              <div className="D-Flex align-items-center" key= {key}>
              <span className="booked-seat-p">{label}</span> 
               {seat && seat[key] ? <span className="Seating-booking">{seat[key]}</span> : <span className="Seating-booking">{`0`}</span>
               }
               </div>
            ))}
           
            </div>
            <div><span className="Heading-Detail">Slot:</span>  <span className="Seat_B">{timing}</span></div>
            <div><span className="Heading-Detail ">Movie:</span> <span className="Movie-Name">{movieName}</span></div>
       
        </div>
      )}
    </div>
  );
}
