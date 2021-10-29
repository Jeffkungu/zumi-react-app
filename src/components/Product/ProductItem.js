import classes from './ProductItem.module.css'
import { useState } from 'react'
import ProductDetail from './ProductDetail'

const ProductItem = props => {
  const [modalIsVisible, setModalVisible] = useState(false)
  const price = `$${props.price.toFixed(2)}`

  const prodDetails = {
    id: props.id,
    name: props.name,
    brand: props.brand,
    sku: props.sku,
    price: price,
    quantity: props.quantity
  }

  const showProdDetailsHandler = () => {
    setModalVisible(true)
  }

  const hideProdDetailsHandler = () => {
    setModalVisible(false)
  }

  return (
    <>
      {modalIsVisible && (
        <ProductDetail
          handleHideModal={hideProdDetailsHandler}
          prodDetails={prodDetails}
        />
      )}

      <li className={classes.product} onClick={showProdDetailsHandler}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.brand}>{props.brand}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </li>
    </>
  )
}

export default ProductItem
