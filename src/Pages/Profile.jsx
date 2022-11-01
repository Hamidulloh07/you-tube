import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProfile from '../Hooks/useProfile';

const Profile = () => {

	const { id } = useParams();
	const [loading, setLoading] = useState(true);

	const [user, setUser] = useProfile();

	useEffect(() => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/photos/' + id)
			.then((res) => res.json())
			.then((data) => {
				setUser(data);
				console.log(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const loader = (
		<div className='card' aria-hidden='true'>
			<div className='w-100 h-50'></div>
			<div className='card-body'>
				<h5 className='card-title placeholder-glow'>
					<span className='placeholder col-6'></span>
				</h5>
				<p className='card-text placeholder-glow'>
					<span className='placeholder col-7'></span>
					<span className='placeholder col-4'></span>
					<span className='placeholder col-4'></span>
					<span className='placeholder col-6'></span>
					<span className='placeholder col-8'></span>
				</p>
			</div>
		</div>
	);

	if (loading) {
		return loader;
	}
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img className='card-img-top' src={user.url} alt='Card cap' />
			<div className='card-body'>
				<h5 className='card-title'>
					{user.title} 
				</h5>
				<p className='card-text'>{user.id}</p>
				<Link to='/profile/' className='btn btn-primary'>
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default Profile;