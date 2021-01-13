import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listCuisineProducts, listProducts } from '../actions/productActions'
import {
    Container,
    Description,
    Thumbnail,
    BasketQuantity,
} from './styles';

const CuisineScreen = ({ match }) => {
    // const keyword = match.params.keyword
    const cuisine = match.params.cuisine

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productCuisine)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listCuisineProducts(cuisine, pageNumber))
    }, [dispatch, cuisine])

    // let productsCuisine = []
    // products.forEach(pr => {
    //     if (pr.cuisine == cuisine) {
    //         productsCuisine.push(pr)
    //     }
    // });
    console.log(products)
    return (
        <>

            <Meta title={cuisine} />


            <Link to='/' className='btn btn-danger ml-5'>
                Go Back
          </Link>

            <div className="container">
                <h3 className="font-weight-bold"> {cuisine}</h3>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                            <>

                                <Row>
                                    {products.map((product) => (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />
                                        </Col>
                                    ))}
                                </Row>
                                <Paginate
                                // pages={pages}
                                // page={page}
                                // keyword={keyword ? keyword : ''}
                                />

                            </>
                        )}
            </div>

        </>
    )
}

export default CuisineScreen
