import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <div className="card product">
                <img className="card-img-top" src={this.props.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a className="btn btn-primary">Add To Wishlist</a>
                </div>
            </div>
        );
        
    }
}

export default Product;
