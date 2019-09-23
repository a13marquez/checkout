import *  as React from 'react';
import { connect } from 'react-redux';
import lodash from 'lodash';

import StyledColumnAside
  from '@bit/a13marquez.styled-components.styled-column-aside';
import StyledBorderedHeader
  from '@bit/a13marquez.styled-components.styled-bordered-header';

import { getDiscountsList, getTotals, getVisibleProducts } from '../../reducers';
import * as actions from '../../actions';
import { getOneFree, bulkPriceDiscount }
  from '../../helpers/discountCalculator';
import { ProductDiscountInterface }
  from '../../interfaces/product-disccount.interface';

import { DiscountActionType, ProductActionType } from '../../types';
import { PricingRuleInterface, TotalInterface, ProductInterface }
  from '../../interfaces';

import { ItemsRow } from './summary/items-row';
import { DiscountsTable } from './summary/discounts-table';
import { TotalRow } from './summary/total-row';

interface SummaryPropInterface {
  fetchDiscounts: () => DiscountActionType;
  fetchProducts: () => ProductActionType;
  updateDiscounts: (discounts: PricingRuleInterface) => DiscountActionType;
  products: ProductInterface[];
  discounts: PricingRuleInterface;
  total: TotalInterface;
}

export class SummarySection extends React.Component<SummaryPropInterface> {

  public componentDidMount() {
    this.fetchData();
  }

  public componentDidUpdate(prevProps: SummaryPropInterface) {
    const {discounts} = this.props;
    if (!lodash.isEqual(prevProps.discounts, discounts)) {
      this.fetchData();
    }
    this.getDiscounts();
  }

  public getTotalPrice(pricingRules: PricingRuleInterface) {
    const { total } = this.props;
    let totalPrice = total.price;
    const pricingRuleKeys = Object.keys(pricingRules);
    for (let i = 0, l = pricingRuleKeys.length; i < l; i+=1) {
      const key = pricingRuleKeys[i];
      if (pricingRules[key]) {
        for (let j = 0, m =  pricingRules[key].length; j < m; j+=1) {
          totalPrice -= pricingRules[key][j].discountApplied;
        }
      }
    }
    return totalPrice;
  }

  public getDiscounts() {
    const { updateDiscounts, products, discounts } = this.props;
    for (let i = 0, l = products.length; i < l; i+=1) {
      const product = products[i];
      if (product.getOneFree && discounts.getOneFree) {
        const discountFound = discounts.getOneFree.find(
          (discount: ProductDiscountInterface) => discount.product === product.code,
        );
        if (discountFound) {
          discountFound.discountApplied = getOneFree(product.price, product.quantity).discount;
        }
      }
      if (product.bulkDiscount && product.quantity >= product.bulkQuantity
        && discounts.bulkDiscount) {
        const discountFound = discounts.bulkDiscount.find(
          (discount: ProductDiscountInterface) => discount.product === product.code,
        );
        if (discountFound) {
          discountFound.discountApplied = bulkPriceDiscount(product.bulkPrice, product.price, product.quantity).discount;
        }
      }
    }

    updateDiscounts(discounts);
  }

  public fetchData() {
    const { fetchDiscounts, fetchProducts } = this.props;
    fetchDiscounts();
    fetchProducts();
  }

  public render() {
    const { total, discounts } = this.props;
    return (
      <StyledColumnAside>
        <StyledBorderedHeader
          backgroundColor="f3f3f3"
          color="#000"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
        >
          Order Summary
        </StyledBorderedHeader>
        <ItemsRow
          price={total.price}
          items={total.items}
          currency="€"
        />
        <DiscountsTable discounts={discounts} />
        <TotalRow
          totalPrice={this.getTotalPrice(discounts)}
          currency="€"
        />
      </StyledColumnAside>
    );
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state),
  discounts: getDiscountsList(state),
  total: getTotals(state),
});

export const VisibleSummarySection = connect(
  mapStateToProps,
  actions,
)(SummarySection as React.ComponentType);
