import React from 'react'
import './MainVideos.css'

export class MainVideos extends React.Component {
    render() {
        return (
            <section className="section-videos">
                <h2 className="section-videos-heading">
                    Why Our Bikers
                    <br />
                    <span>Choose Us</span>
                </h2>
                <div className="section-videos-container">
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Z-p3NLgKYIQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        {/* <video
                            src="https://www.tolindo.ca/wp-content/uploads/2019/06/Video-6-for-TOLindo-IG.mp4"
                            type="video/mp4"
                            controls
                            controlsList="nodownload"
                        >
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ezuXGpnBi-A"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        {/* <video
                            src="https://www.tolindo.ca/wp-content/uploads/2019/06/Video-7-for-TOlindo-IG-.mp4"
                            type="video/mp4"
                            controls
                            controlsList="nodownload"
                        >
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/S-qEO0TlBh8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        {/* <video
                            src="https://www.tolindo.ca/wp-content/uploads/2019/06/Video-12-for-TOlindo-IG.mp4"
                            type="video/mp4"
                            controls
                            controlsList="nodownload"
                        >
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                    {/* <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Q3dMqVxLEHE"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div> */}
                </div>
            </section>
        )
    }
}
