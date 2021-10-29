import classes from './OrderItem.module.css'
import { useState } from 'react'
import OrderDetail from './OrderDetail'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const OrderItem = props => {
  const [modalIsVisible, setModalVisible] = useState(false)

  const orderDetails = {
    id: props.id,
    number: props.number,
    name: props.name,
    status: props.status,
    address: props.address,
    products: props.products
  }

  const showOrderDetailsHandler = () => {
    // setModalVisible(true)
    toast('Coming soon')
  }

  const hideOrderDetailsHandler = () => {
    setModalVisible(false)
  }

  return (
    <>
      {modalIsVisible && (
        <OrderDetail
          handleHideModal={hideOrderDetailsHandler}
          orderDetails={orderDetails}
        />
      )}

      <li className={classes.order} onClick={showOrderDetailsHandler}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.name}>{props.address}</div>
          <div className={classes.status}>{props.status}</div>
        </div>
      </li>
    </>
  )
}

export default OrderItem
