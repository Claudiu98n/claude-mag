import React from 'react'
import Layout from '../../components/layout/Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavourites } from '../../redux/favourites/FavouritesActions';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import './Favourites.css';

function Favourites(props) {
    const {favourites, removeFromFavourites} = props;

    return (
        <Layout>
            <div className="favourite-page container-fluid container-min-max-width">
                {
                    favourites.length
                    ?   <div className="row">
                        {
                            favourites.map(product => {
                                return <div className="col-4 d-flex flex-column align-items-center text-center my-5" key={product.id}>
                                            <div>
                                                <img src={ product.image } alt="Produs"/>
                                                <p>{ product.name }</p>
                                            </div>
                                            <p>{ product.price } { product.currency }</p>
                                            <div onClick={() => removeFromFavourites({id: product.id})}>
                                                    <Close />
                                            </div>
                                        </div>
                            })
                        }
                        </div>

                    :   <div className="empty-favourite-page d-flex flex-column align-items-center">
                            <p className="h3">Nu ai produse favorite! </p>
                            <p className="h4">Adauga folosind inimioara de pe pagina de produs</p>
                            <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                        </div>
                }
            </div>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        favourites: state.favourites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavourites: (id) => dispatch(removeFromFavourites(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);