import React from 'react'
import './Video.css'
import video from '../../assets/video.mp4'

function Video() {
    return (
        <div className="hero-video-container">
            <video autoPlay loop muted className="hero-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="overlay" />
            <div className="hero-content">
                <h1>Welcome to Our Platform</h1>
                <p>Explore the best services and plans just for you.</p>
            </div>
        </div>
    )
}

export default Video
