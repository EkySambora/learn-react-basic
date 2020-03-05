import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="youtube-wrapper">
    <div className="img-thumb">
      <img src={props.dataImg} alt="" />
      <p className="time">{props.time}</p>
    </div>
    <p className="title">{props.title}</p>
    <p className="desc">{props.desc}</p>
  </div>
);
YoutubeComp.defaultProps = {
  time: '00:00',
  title: 'Not Found',
  desc: 'lorem ipsum ',
  dataImg: 'https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?cs=srgb&dl=lighted-candle-695644.jpg&fm=jpg'
};
export default YoutubeComp;
