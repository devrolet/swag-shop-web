import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
import Product from '../Product/Product';
import Wishlist from '../Wishlist/Wishlist';

// Services
import HttpService from '../services/http.service';

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {products:[]};

    // Bind Function - a must in React always bind your functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data})
    }, err => {

    });
  }

  productList = () => {
   const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl} />
      </div>
   );

   return (list);

  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-md-4">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
