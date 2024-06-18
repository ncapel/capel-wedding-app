import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Story() {
    return (
        <Container fluid className='text-center story' id='our-story'>
            <Row>
            <Col xs={12} md={8} lg={6} className='mx-auto'>
                <h2 className='text-white sub-title my-5'>How They Met</h2>
                <p className='text-white sub-title'>
                Nick and Cheyenne's connection blossomed in the most unexpected place – the pharmacy. 
                Their shared love for weight lifting became a common thread, weaving through the aisles of 
                medications and consultations. Weeks flew by filled with playful banter that sparked a warmth in their cheeks. 
                To their delight, they discovered a happy coincidence: they frequented the same gym!
                Lunch breaks transformed into stolen moments where stolen glances and whispered jokes 
                painted their days with a rosy hue. It was Cheyenne, with her kind heart and infectious smile, 
                who noticed Nick's perpetual struggle with meal prep. A talented cook herself, she volunteered to be his culinary hero.
                Picking up his first week's worth of meals marked a turning point. Dinners became more than just fuel; they were an 
                invitation to connect. Under the gentle glow of the evening sky, conversations flowed in the gym parking lot, as easy 
                and comforting as a well-worn t-shirt. The rhythmic clang of weights became their soundtrack, their shared effort a 
                silent language of encouragement and admiration. As they motivated each other in their fitness journeys, Nick, emboldened 
                by a heart full of appreciation, finally gathered the courage to ask Cheyenne out on a date. 
                The rest, as they say, is history. Their love story, sculpted by sweat, laughter, and a shared passion for fitness, 
                thrived on healthy meals and undeniable chemistry.
                </p>
            </Col>
            </Row>
        </Container>
    );
};

export default Story;