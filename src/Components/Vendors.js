import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Vendors() {

	return (
		<Row className='d-flex justify-content-center text-center' id='vendors'>
			<Col xxs={12} md={8} lg={6} className='p0'>
				<h2 className='sub-title text-white mb-5'>Shoutout to our Vendors</h2>
				<p className='sub-title text-white'>Photography - FirstLast, @Social</p>
				<p className='sub-title text-white'>DJ - FirstLast, @Social</p>
				<p className='sub-title text-white'>Venue/Catering - FirstLast, @Social</p>
				<p className='sub-title text-white'>Florist - FirstLast, @Social</p>
				<p className='sub-title text-white'>Cake - FirstLast, @Social</p>
			</Col>
		</Row>
	)
}

export default Vendors;
