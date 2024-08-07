import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Vendors() {

	return (
		<Row className='d-flex justify-content-center text-center' id='vendors'>
			<Col xxs={12} md={8} lg={6} className='p0 text-white sub-title'>
				<h2 className='mb-5'>Shoutout to our Vendors</h2>
				<p className=''>Photography - <a className='text-white' href='https://www.instagram.com/graceoury/' target='_blank'>GraceOury</a></p>
				<p className='' >DJ - <a className='text-white' href='https://www.instagram.com/djtrey803' target='_blank'>djtrey803</a></p>
				<p className=''>Venue/Catering -<a className='text-white' href='https://www.instagram.com/warehouse18venues/' target='_blank'>Warehouse18</a></p>
				<p className=''>Cake - <a className='text-white' href='https://www.instagram.com/cakebudsjc' target='_blank'>cakebudsjc</a></p>
				<p className=''>Hair Stylists - <a className='text-white' href='https://www.instagram.com/summerhopeehair' target='_blank'>summerhopeehair</a> and <a className='text-white' href='https://www.instagram.com/locksbylexieee' target='_blank'>locksbylexieee</a>
				</p>
			</Col>
		</Row>
	)
}

export default Vendors;
