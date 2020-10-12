import React from 'react';
import Layout from '../../components/layout/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartActions';
import { addToFavourites } from '../../redux/favourites/FavouritesActions';
import { ReactComponent as Heart } from '../../assets/icons/add-heart.svg';
import { ReactComponent as Verified } from '../../assets/icons/verified.svg';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    render() {
        const { product } = this.state;
        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <div className="d-flex flex-row">
                                <button
                                    className="btn btn-dark mb-4 font-weight-bold"
                                    onClick={() => {
                                        this.props.addToCart({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image                                              
                                            }
                                        })
                                    }}
                                >
                                    Adaugă în coș
                                </button>
                                <div 
                                    className="mt-1 ml-2 d-flex flex-column"
                                    onClick={() => 
                                        this.props.addToFavourites({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image,
                                            }
                                    })}
                                > 
                                    <Heart />
                                    {
                                        this.props.favourites
                                        .filter(favourite => favourite.id === this.state.product.id)
                                        .map((favourite, index) => 
                                            <div className="d-flex flex-row" key={index}>
                                                <p>Produsul a fost adaugat la favorite</p>
                                                <Verified className="ml-2"/>
                                            </div>
                                            )
                                    }
                                </div>
                            </div>
                            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavourites: (product) => dispatch(addToFavourites(product))
    }
}

function mapStateToProps(state) {
    return {
        favourites: state.favourites.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);