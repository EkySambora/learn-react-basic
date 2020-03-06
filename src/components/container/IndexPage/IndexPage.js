import React, {Fragment} from 'react';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const IndexPage = () => {
    return (
        <Fragment>
            <Header />
            <Home />
            <Footer />
        </Fragment>
    )
}

export default IndexPage;