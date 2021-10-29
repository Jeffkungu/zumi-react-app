import { useState } from 'react'
import Card from '../UI/Card'
import classes from '../MainPage.module.css'
import OrderItem from './OrderItem'

const Order = props => {
  const [orderList, setOrderList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchOrdersHandler () {
    try {
      const response = await fetch(
        'http://localhost:3000/orders'
      )
      if (!response.ok) {
        throw new Error('Error fetching products')
      }
      const data = await response.json()
      setError(null)
      setOrderList(data)
      setIsLoading(false)
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  fetchOrdersHandler()

  const orders = orderList.map(order => (
    <OrderItem
      key={order._id}
      id={order._id}
      number={order.orderNumber}
      name={order.customerName}
      address={order.customerAddress}
      status={order.status}
      products={order.orderLines}
    />
  ))

  return (
    <section className={classes.content}>
      <Card>
        {!isLoading && <ul>{orders}</ul>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </Card>
    </section>
  )
}

export default Order
