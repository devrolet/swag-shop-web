import React, {Component} from 'react';
import './ProductCondensed.css';

class ProductCondensed extends Component {
    render() {
        return (
            <li className="list-group-item pc-condensed">
                <a className="btn btn-outline-danger btn-sm">x</a>
                <p>{this.props.product.title} | <strong>${this.props.product.price}</strong></p>
            </li>
        );
        
    }
}

export default ProductCondensed;