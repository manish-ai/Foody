import React from 'react'

import styled from 'styled-components';
import { Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

import { GrCart, GrDown, GrLocation } from 'react-icons/gr';
import { RiHeartLine, RiSearchLine } from 'react-icons/ri';

import { ImLocation } from 'react-icons/im';

import { FaSearch } from 'react-icons/fa';

const userDropDown = {
  fontSize: "1.08rem",
  fontWeight: " 600",
  color: "#55688C",
  maxWidth: "9rem",
  marginLeft: "-10px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}
const userName = {
  fontSize: "1.07rem",
  fontWeight: " 600",
  color: "black",
  maxWidth: "9rem",
  marginLeft: "-1px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

}
const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart


  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      {/* <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                  </LinkContainer>
                )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <NavWrapper >
        <div className=" ml-5 mr-5">
          <nav className="navbar navbar-expand-samll navbar-dark  navbar1">

            <Link to='/' className="nav-link col-xs-2 mr-auto" >
              <h1 > <span className="text-center  shop"><img src="\Assets\foody3.png" alt="$"></img></span></h1>
            </Link>

            <span className="search-container m-auto">
              <Route render={({ history }) => <SearchBox history={history} />} />
            </span>


            <Link to="/cart"><span className="ml-auto pl-1 col-xs-1"><i className="far fa-shopping-cart fav text-dark " aria-hidden="true"></i>
              <span className="badge badge-danger" id='lblCartCount'> {cartItems ? cartItems.length : 0} </span><span style={userName}>CART</span></span>
            </Link>



            {userInfo ?
              <span className="  ml-3 pl-2 col-xs-1 ">
                <img src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" className="rounded-circle userimg ml-3  mr-0 pr-0 d-inline-block align-top"
                />
                <NavDropdown title={userInfo.name} style={userDropDown} id="basic-nav-dropdown" className=" pl-0 d-inline-block align-top">
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown></span>
              :

              <div className=" mr-auto ml-4 pl-2 col-xs-2 ">
                <Link to='/login' style={userName}>
                  <i className='fal fa-user-circle  fa-lg'></i> Sign In
                  </Link>
              </div>
            }



            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='ADMIN' id='adminmenu' className="admin-font">
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}

          </nav>
        </div>
      </NavWrapper>
    </>
  )
}

export default Header

const NavWrapper = styled.nav`
background-color: #fff !important;
font-family: 'Roboto', sans-serif;
box-shadow: 0px 8px 30px 0px rgba(82,63,105,0.08);

color: #55688C;
// .dropdown-menu{
// margin-left: 85vw !important;
//     float: right !important;
// }
.fav{
    font-size:1.4em;
    color:#55688C;
}a:hover {
    text-decoration: none;
  }
  
  a:active {
    text-decoration: none;
  }
  
.fav: hover{
    text-decoration:none !important;

}
.search-container{
  width: 100%;
}
img{
    margin-top: 2px;
    height: 46px;
    width:130px;
    text-shadow: black;
}
.cart-name{
    
    font-size: 1.08rem;
    font-weight: 600;
    margin: 0px 0.5rem;
    color: #55688C;
    max-width: 9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.location{
    color: rgb(237, 90, 107) !important;
    font-size: 1.28rem;
    font-weight: 600;
    margin-top: -10px !important;
    margi-right:-10px;
}
#lblCartCount {
    font-size: 14px;
    background: rgb(237, 90, 107);
    color: #fff;
    padding: 1px 5px;
    vertical-align: top;
    margin-left: -1.3px;
}
.loc{
    color:#E68C45;
}
.bangalore{
    font-size: 1.11rem;
    font-weight: 600;
    z-index:1;
    letter-spacing:0.26px;
}
.phone{
    font-size: 18.5px;
    font-weight:600;

}
.helpimg{
    color:#E68C45;
    margin-botton: -10px;
    font-size:1.3em;

}
.badge {
    padding-left: 9px;
    padding-right: 9px;
    padding-top:2px;
    margin-top:-6px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 4px;
  }
    .userimg{
        height:2.8em;
        width:3em;
        
    }
    .search{
        border-radius: 0.5rem;
        border: 0; 
        font-size:1vw;
        padding-left:20px;
        padding-right:10px;
        line-height:2.9;
        width: 90%;
        z-index:2;
        color: #55688C;
        background-color: rgba(136, 134, 134, 0.106); 
        border-top-right-radius:0px ;
        margin-right:0px;
        display: inline-block !important;
        border-bottom-right-radius:0px ;
    }
    .search-container{
    
      width: 40%;
     
     display: inline-block !important;

    }
    .search-button{
        border-radius: 0.5rem;
        line-height:3;
        margin-top: -4px;
        background: rgb(237, 90, 107);
        color: white;
        font-weight: 700;
        margin-left: 0px;
        border-top-left-radius:0px ;
        border-bottom-left-radius:0px ;
        display: inline-block !important;
      }
   .search:focus{
       outline: none;
    box-shadow: none;
    }
    .sicon{
        margin-top:0.15vw;
        margin-left: -2vw;
        z-index:10;
        color: grey;
    }
    .search:active{
        z-index: 21;
    }
	.cart: hover{
		transition: all .5s ease-in-out;
    }
    .nav2{
        allign: center;
    }
    
@media only screen and (min-width: 1210px){
    nav{ 
        margin-left: 1.8vw !important;
    }
    .search{
        margin-left:-1vw !important;
    } 
    .userimg{
        // margin-top:-0.4vw;
    }
    
}


@media only screen and (min-width: 1000px) and (max-width: 1210px) {
.phone{
    display:none;
}
.phone-container{
    margin-top: -1px;
}
.bangalore{
    font-size: 15px !important;
    font-weight: 500;
}
.search{
    margin-left: -1em !important;
}

}

@media only screen  and (max-width: 1000px) {
    .phone{
        display:none;
    }
    .phone-container{
        margin-top: -1px;
    }
    .bangalore{
        font-size: 14px !important;
        font-weight: 400;
    }
    .search{
        margin-left: -1em !important;
    }
    i{
        font-size: 0.4em !important;
    }
    .shop{
    height: 36px !important;
    width:120px !important;
    }
}

@media only screen and (min-width: 750px) and (max-width: 880px) {
  
    .search{
        width: 30% !important;
    }
    .bangalore{
        font-size: 10px !important;
        font-weight: 300;
    }
    .loc{
        font-size: 0.9em;
    }
    img{  height: 36px !important;
        width:90px !important;
    }
    .phone{
        font-size: 0.8em !important;
    }
    .fav{
        font-size:0.8em;
    }
    .sicon{
        margin-left:-2.89vw !important;
    } .userimg{
        height:2.8em;
        width:2.4em !important;
        margin-top:-0.4vw;
    }

    }

    
@media only screen and (max-width: 760px){
    .bangalore{
        display: none !important;
    }
    .loc{
        display: none !important;

    }
    .search{
        height: 6.5em;
        width: 40%;
    }
    img{
        margin-left:-1em;
        width: 1.9em;
        height: 0.9em;
    }
    .sicon{
        font-size:1.3em;
        margin-left:-1.5em;
        margin-right:2em;
    }.helpimg{
        margin-left:1.5em;
    }
    .fav{
        
        font-size:1.3em;
    }
    ::placeholder {
        font-size: 30px !important;
    }
    input::-webkit-input-placeholder{
        
        font-size: 11px !important;
    }
    input:-moz-placeholder {
                font-size: 30px !important;
    }
    .userimg{
        margin-top:-0.1em;
        margin-left: 0.2em;
        width: 2.4em;
        height: 2.4em;


    }
}
`
