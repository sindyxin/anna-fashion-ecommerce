import React from 'react';
import './CollectionItem.styles.scss';

export const CollectionItem = ({
	id,
	name,
	price,
	imageUrl,
	history,
	linkUrl,
	match
}) => {
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='collection-footer'>
				<h1 className='name'>{name.toUpperCase()}</h1>
				<span className='price'>${price}</span>
			</div>
		</div>
	);
};
