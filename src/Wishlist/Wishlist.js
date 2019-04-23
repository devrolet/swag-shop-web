import React, {Component} from 'react';
import './Wishlist.css';

import ProductCondensed from '../ProductCondensed/ProductCondensed';

import DataService from '../services/data.service';
import NotificationService from '../services/notification.service';

class Wishlist extends Component {
    
    constructor(props) {
        super(props);

        this.state = {Wishlist: [
            {
                title: "Hustle Ink Tee",
                price: 24.99,
                _id: "sdk3456"
            },
            {
                title: "Hustle Ink Hoodie",
                price: 44.99,
                _id: "sdk3457"
            },
            {
                title: "Hustle Ink Raglan",
                price: 29.99,
                _id: "sdk3454"
            }
        ]};

        // Bind functions
        this.createWishlist = this.createWishlist.bind(this);
    }

    createWishlist = () => {
        const list = this.state.Wishlist.map((product) => 
            <ProductCondensed product={product} key={product._id} />
        );

        return (list);
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishlist()}
                    </ul>
                </div>
            </div>
        );
        
    }
}

export default Wishlist;