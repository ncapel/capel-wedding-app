import React from 'react';
import { Row, Col, Image} from 'react-bootstrap';


function WeddingInfo (props) {

    return (
        <Row className='d-flex justify-content-center wed-info text-center' id='wedding-info'>
            <h2 className='sub-title text-white mb-5'>Wedding Info </h2>
            <Col xxs={12} md={8} lg={6} className='p-0 mt-5'>
                <h3 className='sub-title text-white mb-3'>Ceremony & Reception</h3>
                <p className='sub-title text-white'>Warehouse 18 - 18 2nd St SE, Hickory, NC 28602</p>
                <p className='sub-title text-white'>Ceremony - 4:00 PM</p>
                <p className='sub-title text-white'>Reception - 5:00 PM</p>
                <Image src={props.imgPath} alt='pic of the venue' className='venue-image'/>
            </Col>
            <Col xxs={12} md={8} lg={6} className='p0 mt-5'>
                <h3 className='sub-title text-white mb-5'>Dress Code & Accomodations</h3>
                <p className='sub-title text-white px-5'>We have reserved a block of rooms at Hilton Garden Inn Hickory
                <br></br>
                1320 17th Street Dr SE, Hickory, NC 28602 - <a href='https://www.hilton.com/en/attend-my-event/hcksegi-91p-1aa52f9e-5b00-4f54-809a-c87e6656fb74' target='_blank' className='text-white'>Book Now</a>
                </p>
                <p className='sub-title text-white px-5'>
                    To fully immerse yourselves in the spirit of the evening, we invite our guests to consider attire reminiscent of the 1920s.  
                </p>
                <p className='sub-title text-white px-5'>
                    We're having a buffet style dinner, the proteins are Prime Rib and Garlic Herb Chicken, and the sides are Roasted Broccoli, Mashed Potatoes, with a Mixed Greens Salad.
                </p>
            </Col>
        </Row>
    );
};

export default WeddingInfo;
