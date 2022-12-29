import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png';
import AppContext from '../context/AppContext';

const OrderItem = ({ product }) => {

	const {removerFromCart} = useContext( AppContext );
	const handleRemove = product => {
		removerFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]}  alt={product.tile} />
			</figure>
			<p>{product.tile}</p>
			<p>${product.price}</p>
			<img 
				src={close} 
				alt="close"
				onClick={ () => handleRemove(product)}
			/>
		</div>
	);
}

export default OrderItem;