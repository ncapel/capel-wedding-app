import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Vendors() {

	return (
		<Row className='d-flex justify-content-center text-center' id='vendors'>
			<Col xxs={12} md={8} lg={6} className='p0'>
				<h2 className='sub-title text-white mb-5'>Shoutout to our Vendors</h2>
				<p className='sub-title text-white'>Photography - <a className='text-white' href='https://www.instagram.com/graceoury/' target='_blank'>@GraceOury</a></p>
				<p className='sub-title text-white'>DJ - <a className='text-white' href='https://www.instagram.com/djtrey803' target='_blank'>@djtrey803</a></p>
				<p className='sub-title text-white'>Venue/Catering -<a className='text-white' href='https://www.instagram.com/warehouse18venues/' target='_blank'>@Warehouse18</a></p>
				<p className='sub-title text-white'>Florist - FirstLast, @Social</p>
				<p className='sub-title text-white'>Cake - <a className='text-white' href='https://www.instagram.com/cakebudsjc' target='_blank'>@cakebudsjc</a></p>
				<p className='sub-title text white'>Hair Stylist - Summer Hope and Lexi @Social</p>
			</Col>
		</Row>
	)
}

export default Vendors;
