import React from 'react';
import ShopData from './shop_data.js';
import CollectionsPreview from '../../components/CollectionsPreview/script.jsx';

export class ShopPage extends React.Component {
	constructor() {
		super();
		this.state = { collections: ShopData };
	}
	render() {
		const { collections } = this.state;
		return (
			<div>
				<h1>Collections</h1>
				{collections.map(({ id, ...collectProps }) => (
					<CollectionsPreview key={id} {...collectProps}></CollectionsPreview>
				))}
			</div>
		);
	}
}
