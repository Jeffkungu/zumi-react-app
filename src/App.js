import { Route } from 'react-router'
import Header from './components/Layout/Header'
import Product from './components/Product/Product'
import Order from './components/Order/Order'

function App () {
  return (
    <>
      <Header />
      <main>
        <Route path='/products'>
          <Product />
        </Route>
        <Route path='/orders'>
          <Order />
        </Route>
      </main>
    </>
  )
}

export default App
