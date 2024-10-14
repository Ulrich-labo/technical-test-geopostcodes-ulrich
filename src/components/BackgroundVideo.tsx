import React from 'react';
import './css/Background.css'; 
import { VideoLink } from '../urls.tsx';

/**
 * Component rendering a video background
 *
 * @returns a JSX element
 */
const BackgroundVideo = () => {
    return (
        <div className="video-background">
            <video autoPlay loop muted>
                <source src={VideoLink} type="video/mp4" />
            </video>
        </div>
    );
};

export default BackgroundVideo;
