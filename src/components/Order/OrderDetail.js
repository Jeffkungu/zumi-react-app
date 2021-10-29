import Modal from '../UI/Modal'
import classes from '../DetailPage.module.css'

const OrderDetail = props => {
  return (
    <Modal onHide={props.handleHideModal}>
      <div className={classes.total}>
        <span>Order Number</span>
        <span>{props.orderDetails.number}</span>
      </div>
      <div className={classes.total}>
        <span>Name</span>
        <span>{props.orderDetails.name}</span>
      </div>
      <div className={classes.total}>
        <span> Status</span>
        <span>{props.orderDetails.status}</span>
      </div>
      <div className={classes.total}>
        <span>Address</span>
        <span>{props.orderDetails.address}</span>
      </div>
      <div className={classes.total}>
        <span>Products</span>
        <span>{props.orderDetails.products}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={props.handleHideModal}
        >
          Close
        </button>
        <button className={classes.button}>Edit</button>
      </div>
    </Modal>
  )
}

export default OrderDetail
