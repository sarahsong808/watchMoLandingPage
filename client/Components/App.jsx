import React from 'react';
import '../stylesheets/style.css';

function App(props) {

    return (
        <section className="outerContainer">
<a class="github-button" href="https://github.com/oslabs-beta/watchmo" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star oslabs-beta/watchmo on GitHub">Star</a>

            <div>
                <img className="banner" src="/cat.png" />

                <h1>
                    A server-side resolver response time detection tool for monitoring the health status of your GraphQL architecture.
                        The tool can be ran in the background on a server or a client to observe response times as the GraphQL database matures.
            </h1>
                <h2>
            The Development Team
                </h2>
                <div className="headshots">  
             
                    <img src="/Evan.png" className="headshot" id="evan"/>
                    <img src="/Jason.png" className="headshot" id="jason"/>
                    <img src="/Sarah.png" className="headshot" id="sarah"/>
                    <img src="/Spencer.png" className="headshot" id="spencer"/>

                </div>
                <br />
                <div className="names">
                    <label>Evan Hilton</label>
                    <label>Jason Jones</label>
                    <label>Sarah Song</label>
                    <label>Spencer Wyman</label></div>
                    <br/>
                <div className="socialBar">
                    <div className="social">
                        <a href="https://www.linkedin.com/in/evan-hilton-694976b0/">
                            <img
                                className="linkedInImage"
                                src="/linkedinimage.png"
                            /> </a> 
                        <a href="https://github.com/EH1537">
                            <img
                                className="githubImage"
                                src="https://logodix.com/logo/64439.png"
                            />
                        </a>
                        </div> 
                        <div className="social">
                        <a href="https://www.linkedin.com/in/jasonroyjones/">
                            <img
                                className="linkedInImage"
                                src="/linkedinimage.png"
                            /> </a>
                        <a href="https://github.com/JsonRoyJones">
                            <img
                                className="githubImage"
                                src="https://logodix.com/logo/64439.png"
                            />
                        </a>
                        </div>
                        <div className="social">
                        <a href="https://www.linkedin.com/in/sarah-song-65702b89/">
                            <img
                                className="linkedInImage"
                                src="/linkedinimage.png"
                            /> </a>
                        <a href="https://github.com/zavagezong">
                            <img
                                className="githubImage"
                                src="https://logodix.com/logo/64439.png"
                            />
                        </a>
                        </div>
                        <div className="social">
                        <a href="https://www.linkedin.com/in/spencerwyman/">
                            <img
                                className="linkedInImage"
                                src="/linkedinimage.png"
                            /> </a>
                        <a href="https://github.com/spencerWyman">
                            <img
                                className="githubImage"
                                src="https://logodix.com/logo/64439.png"
                            />
                        </a>
                        </div>
                </div>
            </div>
            <br/>
        </section>

    )
}

export default App;