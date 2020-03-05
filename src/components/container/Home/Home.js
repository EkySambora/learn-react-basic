import React from 'react';
import YoutubeComp from '../../YoutubeComp/YoutubeComp';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Home = () => (
  <div className="container">
    <Header />
    <h2>Youtube Component</h2>
    <hr />
    <YoutubeComp
      time="7:02"
      title="Judul 1"
      desc="lorem ipsum dolor sit amet"
    />
    <YoutubeComp
      time="10:20"
      title="Judul 2"
      desc="lorem ipsum dolor sit amet"
    />
    <YoutubeComp
      time="8:05"
      title="Judul 3"
      desc="lorem ipsum dolor sit amet"
    />
    <YoutubeComp
      time="5:10"
      title="Judul 3"
      desc="lorem ipsum dolor sit amet"
    />
    <YoutubeComp />

    <Footer />
  </div>
);
export default Home;
