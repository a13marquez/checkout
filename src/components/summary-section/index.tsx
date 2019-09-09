import React from 'react'
import { connect } from 'react-redux'
import lodash from 'lodash'

import StyledColumnAside
  from '@bit/a13marquez.styled-components.styled-column-aside'
import StyledBorderedHeader
  from '@bit/a13marquez.styled-components.styled-bordered-header'

import { getDiscountsList, getTotals, getVisibleProducts } from '../../reducers'
import * as actions from '../../actions'
import { getOneFree, bulkPriceDiscount }
  from '../../helpers/discountCalculator'
import { ProductDiscountInterface }
  from '../../interfaces/product-disccount.interface'

import { DiscountActionType, ProductActionType } from '../../types'
import { PricingRuleInterface, TotalInterface, ProductInterface }
  from '../../interfaces'

import { ItemsRow } from './summary/items-row'
import { DiscountsTable } from './summary/discounts-table'
import { TotalRow } from './summary/total-row'

interface SummaryPropInterface {
  fetchDiscounts: () => DiscountActionType;
  fetchProducts: () => ProductActionType;
  updateDiscounts: (discounts: PricingRuleInterface) => DiscountActionType;
  products: ProductInterface[];
  discounts: PricingRuleInterface;
  total: TotalInterface;
}

export class SummarySection extends React.Component<SummaryPropInterface> {
  constructor(props: SummaryPropInterface) {
    super(props)
  }

  public fetchData() {
    const { fetchDiscounts, fetchProducts } = this.props
    fetchDiscounts()
    fetchProducts()
  }

  public componentDidMount() {
    this.fetchData()
  }

  public componentDidUpdate(prevProps: SummaryPropInterface) {
    if (!lodash.isEqual(prevProps.discounts, this.props.discounts)) {
      this.fetchData()
    }
    this.getDiscounts()
  }

  public getTotalPrice(pricingRules: PricingRuleInterface) {
    let totalPrice = this.props.total.price
    for (const discountType in pricingRules) {
      if (pricingRules[discountType]) {
        for (const discount of pricingRules[discountType]) {
          totalPrice -= discount.discountApplied
        }
      }
    }
    return totalPrice
  }

  public getDiscounts() {
    const { updateDiscounts, products, discounts } = this.props
    for (const product of products) {
      if (product.getOneFree && discounts.getOneFree) {
        const discountFound = discounts.getOneFree.find(
          (discount: ProductDiscountInterface) => discount.product === product.code,
        )
        if (discountFound) {
          discountFound.discountApplied = getOneFree(product.price, product.quantity).discount
        }
      }
      if (product.bulkDiscount && product.quantity >= product.bulkQuantity
        && discounts.bulkDiscount) {
        const discountFound = discounts.bulkDiscount.find(
          (discount: ProductDiscountInterface) => discount.product === product.code,
        )
        if (discountFound) {
          discountFound.discountApplied = bulkPriceDiscount(product.bulkPrice, product.price, product.quantity).discount
        }
      }
    }

    updateDiscounts(discounts)
  }

  public handleCheckout() {
    const { products, discounts } = this.props
  }

  public render() {
    const { total, discounts } = this.props
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
          onCheckout={this.handleCheckout}
        />
      </StyledColumnAside>
    )
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state),
  discounts: getDiscountsList(state),
  total: getTotals(state),
})

export const VisibleSummarySection = connect(
  mapStateToProps,
  actions,
)(SummarySection as React.ComponentType)
