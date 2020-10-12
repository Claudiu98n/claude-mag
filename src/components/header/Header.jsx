import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/UserActions';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg'
import { ReactComponent as FullHeart } from '../../assets/icons/full-heart.svg'

function Header(props) {
    const numberOfProductsInCart = (products) => {
        return products.reduce((acc, product) => {
            return acc + product.quantity;
        }, 0)
    }

    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    { props.user
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user
                            ? <p className="logout h5" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                <p className="ml-1 mb-0">{ numberOfProductsInCart(props.productsInCart) }</p>
                            </Link>
                            <Link to="/favourites">
                                {
                                    props.numberOfFavouriteProducts 
                                    ? <FullHeart className="ml-2"/>
                                    : <Heart className="ml-2"/>
                                }
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        productsInCart: state.cart.products,
        numberOfFavouriteProducts: state.favourites.products.length,
        user: state.user.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);