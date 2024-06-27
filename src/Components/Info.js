import React from 'react';
import { Row, Col, Image} from 'react-bootstrap';


function WeddingInfo (props) {

    return (
        <Row className='d-flex justify-content-center wed-info text-center' id='wedding-info'>
            <Col xxs={12} md={8} lg={6} className='p-0'>
                <h2 className='sub-title text-white mb-5'>Wedding Info</h2>
                <Image src={props.imgPath} alt='pic of the venue' className='venue-image'/>
                <p className='sub-title text-white mt-4'>
                    Ceremony - 4:00 PM at 18 2nd St SE, Hickory, NC 28602
                    <br></br>
                    Reception - 5:00 PM at 18 2nd St SE, Hickory, NC 28602
                </p>
            </Col>
        </Row>
    );
};

export default WeddingInfo;
