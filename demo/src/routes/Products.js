import React,{Component} from 'react';
import {connect} from 'dva';
import ProductList from '../components/ProductList';
import Add from '../components/Add';

class Products extends Component{
  handleDelete = (id) =>{
    const {dispatch} = this.props;
    dispatch({
      type:'products/delete',
      payload:id,
    });
  }
  handleAdd = (text) =>{
    console.log(text);
    const {dispatch} = this.props;
    dispatch({
      type:'products/add',
      payload:text
    });
  }
  render(){
    const {products} = this.props;
    console.log(products)
    return  (
      <div>
        <h2>List of Products</h2>
        <Add onAdd={this.handleAdd}/>
        <ProductList onDelete={this.handleDelete} products={products}/>
      </div>
    )
  }
}

export default connect(({products}) => ({products}))(Products);
