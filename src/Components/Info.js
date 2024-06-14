import React from 'react';
import { Row, Col, Image} from 'react-bootstrap';

function WeddingInfo () {
    return (
        <Row className="d-flex justify-content-center wed-info">
            <Col xxs={12} md={8} lg={6} className="text-center mb-3">
                <Image src='./src/assets/img/warehouse18.jpg' alt='pic of the venue'/>
                <p className='sub-title'></p>
            </Col>
            <Col xs={12} md={8} lg={6} className="p-0">
                <div className='map'>
                <iframe
                    title='map'
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7887913107215!2d-81.33861818707602!3d35.73141257245663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885131d4f2682a83%3A0x1e39144d693e8dec!2sWarehouse%2018%20Venues!5e0!3m2!1sen!2sus!4v1718403780012!5m2!1sen!2sus`}
                />
                </div>
            </Col>
        </Row>
    );
};

export default WeddingInfo;