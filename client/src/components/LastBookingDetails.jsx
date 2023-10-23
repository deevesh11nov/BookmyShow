import React from "react";

export default function LastBookingDetails(props) {
  const { finishLoading, lastBookingPresent, seat, timing, movieName ,errorMsg} = props;   //destructing prop0s

  const seatLabels = [
    { label: 'A1', key: 'a1' },
    { label: 'A2', key: 'a2' },
    { label: 'A3', key: 'a3' },
    { label: 'A4', key: 'a4' },
    { label: 'D1', key: 'd1' },
    { label: 'D2', key: 'd2' },
  ]
  return (
    <div className="LastBooking" style={{border:"none"}}>
      <h4 className="ContainerHeading">Booking Details</h4>

      {/* Check if there are any previous bookings */}
            {finishLoading && lastBookingPresent === false && errorMsg &&  (
        <div>
          <h3 className="error_msg">{`${errorMsg}`}</h3>   {/* Display a message when no previous booking is found */}
        </div>
      )}
{/* when last booking data is present and data fetching is finish*/}
      {lastBookingPresent && finishLoading && (
        <div>
            <div className="heading_details">Seats:</div>
            <div className="booked_seat_wrapper">
            {/* map function for seat label */}
            {seatLabels.map(({label,key})=>(
              <div className="d-flex align-items-center" key= {key}>
              <span className="booking_seat_sp">{label}</span> 
               {seat && seat[key] ? <span className="seat_booked">{seat[key]}</span> : <span className="seat_booked">{`0`}</span>
               }
               </div>
            ))}
           
            </div>
            <div><span className="heading_details">Slot:</span>  <span className="seat_b">{timing}</span></div>
            <div><span className="heading_details ">Movie:</span> <span className="name_movie">{movieName}</span></div>
       
        </div>
      )}
    </div>
  );
}
