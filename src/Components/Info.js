import React from 'react';
import { Row, Col, Image} from 'react-bootstrap';


function WeddingInfo (props) {

    return (
        <Row className='d-flex justify-content-center wed-info' id='wedding-info'>
            <h2 className='sub-title text-center text-white mb-5'>Wedding Info</h2>
            <Col xxs={12} md={8} lg={6} className='p-0'>
                <Image src={props.imgPath} alt='pic of the venue' className='venue-image'/>
            </Col>
            {/* <Col xs={12} md={8} lg={6} className='p-0'>
                <div className='map'>
                <iframe
                    title='map'
                    width='100%'
                    height='100%'
                    loading='lazy'
                    allowFullScreen
                    referrerPolicy='no-referrer-when-downgrade'
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7887913107215!2d-81.33861818707602!3d35.73141257245663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885131d4f2682a83%3A0x1e39144d693e8dec!2sWarehouse%2018%20Venues!5e0!3m2!1sen!2sus!4v1718403780012!5m2!1sen!2sus`}
                />
                </div>
            </Col> */}
            <p className='sub-title text-white text-center'>
                Ceremony - 4:00 PM at 18 2nd St SE, Hickory, NC 28602
                <br></br>
                Reception - 5:00 PM at 18 2nd St SE, Hickory, NC 28602
            </p>
        </Row>
    );
};

export default WeddingInfo;