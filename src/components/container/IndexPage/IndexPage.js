import React from 'react';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Trolley from '../Trolley/Trolley';

const styled = {
    display: 'block',
    margin: 'auto',
    width: '400px',
}

const styleWrapper = {
    margin: '30px auto'
}

const IndexPage = () => {
    return (
        <Router>
            <div className="IndexPage" style={styled}>
                <Header />
                <div style={styleWrapper}>
                    <Switch>
                        <Route path="/" exact  component={Home} />
                        <Route path="/Keranjang" component={Trolley} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default IndexPage;