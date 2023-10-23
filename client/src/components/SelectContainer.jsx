import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function SelectContainer(props) {

  const {mainheading, items, type, selectedValue, onclick, seats, onchange,display} = props;  //destructing props
  return (
    //grid container
    <Container className="container-fluid ContainerStyle" style={{border:"none"}} >
      <Row className=" gx-5">
        <Col xs={12} md={12}>
     
            <h4 className="ContainerHeading">{mainheading}</h4>
            
            <ButtonGroup aria-label="Basic outlined example" className= "d-block">

              {/* map function is used for movie, time slot and seat container */}
              {items.map((item,index) => (
                <React.Fragment key={index}>
                
                {/* make custom container for movie and time slot */}
                    <button
                      type="button"
                      className={
                        item === selectedValue
                          ? 'btn btn-secondary btn-active shadow-none btnSelecter'
                          : 'btn btn-outline-secondary btnSelecter'
                      }
                      onClick={() => onclick(item)}
                      style={{ marginRight: "15px", marginBottom: "19px" , borderRadius: '7px'}}
                    >
                      {item}
                    </button>
                
                </React.Fragment>
              ))}
    
      
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  

  );

}
