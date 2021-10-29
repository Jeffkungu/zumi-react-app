import Modal from '../UI/Modal'
import classes from '../DetailPage.module.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const ProductDetail = props => {
  const showNotification = () => {
    // setModalVisible(true)
    toast('Coming soon')
    props.handleHideModal()
  }

  return (
    <Modal onHide={props.handleHideModal}>
      <div className={classes.total}>
        <span>Id</span>
        <span>{props.prodDetails.id}</span>
      </div>
      <div className={classes.total}>
        <span> SKU</span>
        <span>{props.prodDetails.sku}</span>
      </div>
      <div className={classes.total}>
        <span>Name</span>
        <span>{props.prodDetails.name}</span>
      </div>
      <div className={classes.total}>
        <span>Price</span>
        <span>{props.prodDetails.price}</span>
      </div>
      <div className={classes.total}>
        <span>Brand</span>
        <span>{props.prodDetails.brand}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={props.handleHideModal}
        >
          Close
        </button>
        <button className={classes.button} onClick={showNotification}>
          Edit
        </button>
      </div>
    </Modal>
  )
}

export default ProductDetail
