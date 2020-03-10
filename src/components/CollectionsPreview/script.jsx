import React from 'react';
import { CollectionItem } from '../CollectionItem/script.jsx';
import './styles.scss';

const CollectionsPreview = ({ title, items }) => (
	<div className='collections-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{/* Filter first 4 items of each collection */}
			{items
				.filter((item, index) => index < 4)
				.map(({ id, ...itemProps }) => (
					<CollectionItem key='{id}' {...itemProps}></CollectionItem>
				))}
		</div>
	</div>
);

export default CollectionsPreview;
