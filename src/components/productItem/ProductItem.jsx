import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartActions';
import { addToFavourites } from '../../redux/favourites/FavouritesActions';
import { Link } from 'react-router-dom';
import { ReactComponent as Heart } from '../../assets/icons/add-heart.svg';
import { ReactComponent as Verified } from '../../assets/icons/verified.svg';

function ProductItem(props) {
    const {name, price, currency, image, id} = props;
    const { addToFavourites, favourites } = props;

    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
            <div 
                className="mt-1 d-flex flex-column align-items-center"
                onClick={() => addToFavourites({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image,
                    }
                })}
            > 
                <Heart />
                {
                    favourites
                        .filter(favourite => favourite.id === id)
                        .map((favourite, index) => 
                            <div className="d-flex flex-row" key={index}>
                                <p>Produsul a fost adaugat la favorite</p>
                                <Verified className="ml-2"/>
                            </div>
                            )
                }
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavourites: (product) => dispatch(addToFavourites(product))
    };
}

function mapStateToProps(state) {
    return {
        favourites: state.favourites.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);