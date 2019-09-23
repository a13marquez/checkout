import *  as React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import StyledList 
  from '@bit/a13marquez.styled-components.styled-list';

import { ProductInterface } from '../../../interfaces';
import { Product } from '../product';
import * as actions from '../../../actions';

import { getFetching, getVisibleProducts } from '../../../reducers';


interface ProductListPropsInterFace {
  products: ProductInterface[]
  isFetching: boolean;
  updateCounter: (code: string, quantity: number) => ProductInterface;
  updateTotal: (price: number, quantity: number) => 
  { price: number, items: number };
  fetchProducts: () => ProductInterface[],
  currency: string
}

export class ProductsList extends React.Component<ProductListPropsInterFace> {
  
  componentDidMount(): void {
    this.fetchData();
  }

  componentDidUpdate(prevProps: ProductListPropsInterFace): void {
    const {products} = this.props;
    if(!_.isEqual(products, prevProps.products)) {
      this.fetchData();
    }
  }

  async fetchData() {
    const { fetchProducts } = this.props;
    await fetchProducts();
  }

  render() {
    const { 
      isFetching, 
      updateCounter,
      updateTotal,
      products, currency } = this.props;
    if (isFetching && !products.length) {
      return <p>Loading...</p>;
    } 
    return(
        <StyledList>
          {products.map((product:ProductInterface) => (
            <Product 
              key={product.code}
              code={product.code}
              name={product.name}
              img={product.img}
              quantity={product.quantity}
              price={product.price}
              currency={currency || '€'}
              onUpdateCounter={(quantity: number) => {
                updateCounter(product.code, quantity);
                updateTotal(product.price, quantity);
              }}
             />
          ))}
        </StyledList>
    );
    
  }
}

const mapStateToProps = (state: any) => ({
  products: getVisibleProducts(state),
  isFetching: getFetching(state),
});

export const VisibleProductList = connect(
  mapStateToProps,
  actions
)(ProductsList as React.ComponentType);
