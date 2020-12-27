import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import HorizontalGallery from 'react-dynamic-carousel'
const ProductCarousel = () => {
  const dispatch = useDispatch()
  const example = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const images = [
    {
      title: " Beverages",
      img: "carousel/Chocolatemilkshake.jpg",
    },
    {
      title: " Italian",
      img: "carousel/Italian.jpg",
    },
    {
      title: "Chilled",
      img: "carousel/Chocolateicecream.jpg",
    },
    {
      title: "Chinese",
      img: "carousel/Chinese.jpg",
    },
    {
      title: "Cake",
      img: "carousel/Chocolava.jpg",
    },
    {
      title: "Non-Veg ",
      img: "carousel/Chicken.jpg",
    },
    {
      title: "South Indian",
      img: "carousel/SouthIndian.jpg"
    }
  ]
  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    // dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
        // <Carousel pause='hover' className='bg-danger'>
        //   {products.map((product) => (
        //     <Carousel.Item key={product._id}>
        //       <Link to={`/product/${product._id}`}>
        //         <Image src={product.image} alt={product.name} fluid />
        //         <Carousel.Caption className='carousel-caption'>
        //           <h2>
        //             {product.name} (${product.price})
        //       </h2>
        //         </Carousel.Caption>
        //       </Link>
        //     </Carousel.Item>
        //   ))}
        // </Carousel>
        <>
          {/* <img src="Assets/corosel.jpg" width="100%" ></img> */}
          <div className=" bac-carosel ">

            <div className="container">
              {/* <h3 className="font-weight-bold">Cuisines</h3> */}
              <HorizontalGallery
                tiles={images.map((products) => (
                  <div className="corosel-img">
                    <Link to={`/cuisine/${products.title}`}>
                      <img src={products.img} width="260px" height="320px" className="cuisine-img"></img>
                    </Link>
                    <div class="centered">{products.title}</div>
                  </div>
                ))}
                elementWidth={285}
                fadeDistance={0.1}
                minPadding={10}
              />
            </div>

          </div>
        </>
      )
}

export default ProductCarousel
