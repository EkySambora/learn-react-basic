import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="youtube-wrapper">
    <div className="img-thumb">
      <img src="https://images.pexels.com/photos/3693701/pexels-photo-3693701.jpeg?cs=srgb&dl=close-up-photo-of-analogue-camera-3693701.jpg&fm=jpg" alt="" />
      <p className="time">{props.time}</p>
    </div>
    <p className="title">{props.title}</p>
    <p className="desc">{props.desc}</p>
  </div>
);
YoutubeComp.defaultProps = {
  time: '00:00',
  title: 'Tidak Ada Judul',
  desc: 'lorem ipsum ',
};
export default YoutubeComp;
