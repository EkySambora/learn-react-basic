import React, { Component } from 'react'
import YoutubeComp from '../../YoutubeComp/YoutubeComp'

class Home extends Component {
    render(){
        return (
            <div>
                <h2>Youtube Component</h2>
                <hr/>
                <YoutubeComp 
                    time="7:02" 
                    title="Judul 1" 
                    desc='lorem ipsum dolor sit amet' 
                />
                <YoutubeComp 
                    time="10:20"
                     title="Judul 2" 
                     desc='lorem ipsum dolor sit amet' 
                    />
                <YoutubeComp 
                    time="8:05" 
                    title="Judul 3" 
                    desc='lorem ipsum dolor sit amet' 
                />
                <YoutubeComp 
                    time="5:10" 
                    title="Judul 3" 
                    desc='lorem ipsum dolor sit amet' 
                />
                <YoutubeComp />

            </div>
        )
    }
}

export default Home;