import React from 'react';

const weddingDate = new Date('2024-11-10T00:00:00');

function Header() {
	const now = new Date();
	const countDown = weddingDate.getTime() - now.getTime();
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

	return (
		<div id='head' className='text-center text-white header'>
			<h1 className='mb-3 title'>Nicholas & Cheyenne</h1>
			<p className='sub-title'>November 10, 2024 • Hickory, NC</p>
			<p className='sub-title'>{days + ' DAYS TO GO!'}</p>
			<p className='sub-title text-bold'>
				Please{' '}
				<a
					href='https://docs.google.com/forms/d/e/1FAIpQLSd8wqlHVvA50ze9Srhta26qFRdQ-WzG6eslr3vVCcXapVlpIg/viewform?usp=sf_link'
					target='_blank'
					rel='noreferrer'
					className='text-white'>
					RSVP
				</a>{' '}
				by October 1st
			</p>
		</div>
	);
}

export default Header;
