import React, { Fragment } from 'react';

import BookTable from './BookTable';

import { timeFormat } from '../../utils/helpers';

const OrdersTab = (props) => {
    const { orders } = props;

    return <Fragment>
        <input className="input" type="radio" name="tabs" id="tab-2" />
        <div className="ilabel">
            <label className="label" htmlFor="tab-2">Orders</label>
            <div className="triangle"></div>
        </div>

        <div className="panel">

            <h4 className="header">Orders information</h4>
            <div className="orders-info">
                {
                    orders.length === 0 ? (
                        <h6>You haven't made any orders yet!</h6>
                    ) : (
                            <ul className="orders-list">{
                                orders.map((order, index) => {
                                    return <Fragment>
                                        <input className="orders-list-item-cb" type="checkbox" name="" id={"cb-" + index} />
                                        <li key={order._id} className="orders-list-item">
                                            <label htmlFor={"cb-" + index} className="orders-list-item-label">
                                                <span className="order-date">{timeFormat(order.orderDate)}</span>
                                                <span className="order-size">{order.orderedBooks.length}</span>
                                                <span className="order-sum">{order.totalPrice.toFixed(2)}</span>
                                            </label>
                                            <span className="orders-list-item-data">
                                                <BookTable source="ordersTab" bookTable={order.orderedBooks} />
                                            </span>
                                        </li>
                                    </Fragment>
                                })
                            }
                            </ul>
                        )
                }
            </div>

        </div>
    </Fragment>
}

export default OrdersTab;