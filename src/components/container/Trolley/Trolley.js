import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import CardTrolley from '../../Cards/CardTrolley/CardTrolley'

const Trolley = (props) => {
    return (
        <Route
            render={ () => 
                props.totalOrder ? <CardTrolley {...props} />  : <Redirect to={{ pathname: "/" }} />
            }
        />
    )
}

const mapsToProps = state => {
    return {
        price: state.price,
        totalOrder: state.totalOrder
    }
}

export default connect(mapsToProps)(Trolley);