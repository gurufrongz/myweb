import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
      return( 
      <div className="container">
          <form>
          

            <div className="form-group row">
          <label className="col-3">
                ID
          </label>
            <div className="col-9">
              <input type="text"name="id"className="form-control"/>              
            </div>
            </div>

         <div className="form-group row">
          <label className="col-3">
                Product
          </label>
            <div className="col-9">
              <input type="text"name="product"className="form-control"/>             
            </div>
            </div>

         <div className="form-group row">
          <label className="col-3">
                Description
          </label>
             <div className="col-9">
              <input type="text"name="description"className="form-control"/>              
            </div>
            </div>

         <div className="form-group row">
          <label className="col-3">
                Price
          </label>
            <div className="col-9">
              <input type="text"name="price"className="form-control"/>             
            </div>
            </div>

         <div className="form-group row">
          <label className="col-3">
                Stock
          </label>
            <div className="col-9">
              <input type="text"name="stock"className="form-control"/>             
            </div>
            </div>
            
            <div className="form-group row">
          <label className="col-3">              
          </label>
            <div className="col-9">
              <button type="button" name="save">save</button>             
            </div>           
            </div> 
              
            </form>
      </div>
      );
    }
  }
  
  export default Product;