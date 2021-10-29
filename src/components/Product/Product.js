import { useState } from 'react'
import Card from '../UI/Card'
import classes from '../MainPage.module.css'
import ProductItem from './ProductItem'

const Product = props => {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchProductsHandler () {
    try {
      const response = await fetch(
        'http://localhost:3000/products'
      )
      if (!response.ok) {
        throw new Error('Error fetching products')
      }
      const data = await response.json()
      setError(null)
      setProductList(data)
      setIsLoading(false)
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  fetchProductsHandler()

  const products = productList.map(product => (
    <ProductItem
      key={product._id}
      id={product._id}
      sku={product.sku}
      name={product.name}
      brand={product.brand}
      price={product.price}
      quantity={product.quantity}
    />
  ))

  return (
    <section className={classes.content}>
      <Card>
        {!isLoading && <ul>{products}</ul>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </Card>
    </section>
  )
}

export default Product
