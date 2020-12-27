import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import Rating from './Rating'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

const Product = ({ product }) => {

  const dispatch = useDispatch()
  const [qty, setqty] = useState(0)

  const increment = () => {
    setqty(qty + 1)
    dispatch(addToCart(product._id, qty))
  }

  const decrement = () => {
    setqty(qty - 1)
    if (qty === 1) {
      dispatch(removeFromCart(product._id))
    }
  }
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  useEffect(() => {
    cartItems.forEach(ele => {
      if (ele.product === product._id) {
        setqty(ele.qty)

      }
      console.log(ele)

    });

  }, [])

  return (
    <Card className='my-3 p-2 card-product-home'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' width="200px" height="160px" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title >
            <span className="product-name">{product.name}</span>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h5' className="mt-2">₹{product.price}</Card.Text>
        {qty == 0 ?
          <Button className="cart-btn" onClick={increment}>Add To Cart</Button>
          : <ButtonGroup variant="sm">
            <Button className="cart-btn1" onClick={decrement}>-</Button>
            <input value={qty} className="quantity" />
            <Button className="cart-btn1" onClick={increment}>+</Button>
          </ButtonGroup>
        }
      </Card.Body>
    </Card>
  )
}

export default Product
