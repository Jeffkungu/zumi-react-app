import { Link } from 'react-router-dom'

import apparelImage from '../../assets/apparel.jpeg'
import classes from './Header.module.css'

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>Zumi</h1>

        <div>
          <div>
            <Link to='/products'><h3>Products</h3></Link>
          </div>
          <div>
            <Link to='/orders'><h3>Orders</h3></Link>
          </div>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={apparelImage} alt='Apparel Retail' />
      </div>
    </>
  )
}

export default Header
