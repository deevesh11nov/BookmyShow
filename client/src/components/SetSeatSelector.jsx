import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//container for seat 
export default function SetSeatSelector(props) {
    const {mainheading, items,seats, onchange,display,submitBooking} = props;
  return (

    <><Container className="container-fluid ContainerStyle" style={{border:"none"}}>
      <Row>
        <h4 className="ContainerHeading">{mainheading}</h4>
        <ButtonGroup aria-label="Basic outlined example" style={{ display: "contents" }}>

          {/* map function is used for movie, time slot and seat container */}
          {items.map((item, index) => (
            <Col lg={2} md={2} xs={6} sm={3} key={index}>
              <div className="seatWrapper"
              style={{border:"none"}}
              >
                <label htmlFor={`seat-${item}`}>{`Type ${item}`}</label>
                <input
                  className="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  type="number"
                  name={item.toLowerCase()}
                  value={seats && seats[item.toLowerCase()]}
                  onChange={(e) => onchange(e)}
                  style={{ width: "77%" }}
                  id={`seat-${item}`} />
              </div>

            </Col>
          ))}

        </ButtonGroup>

      </Row>
    </Container>
    <Container>
        <Row>
          <Col>
            {/* book now button */}
            <div style={{ margin: "25px 0px", textAlign:'center'   }}>
              <button
                className="BookingButton"
                variant="success"
                onClick={submitBooking}
              >
                <span>Book Now</span>
              </button>

            </div>
          </Col>
        </Row>
      </Container></>

  )
}
