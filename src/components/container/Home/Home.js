import React from 'react';
import YoutubeComp from '../../YoutubeComp/YoutubeComp';

const Home = () => (
  <div className="container">
    <h2>Youtube Component</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa molestiae voluptatum, modi atque exercitationem repellat quis rem eum adipisci odio eveniet aliquam accusamus alias quam sunt labore magnam temporibus inventore.\
    </p>
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

  </div>
);
export default Home;
