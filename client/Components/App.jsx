import React from 'react';
import '../stylesheets/style.css';

function App(props) {

    return (
        <section className="outerContainer">
<a class="github-button" href="https://github.com/oslabs-beta/watchmo" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star oslabs-beta/watchmo on GitHub">Star</a>

         
                <img className="banner" src="/cat.png" />

                <h1>
                    A server-side resolver response time detection tool for monitoring the health status of your GraphQL architecture.
                        The tool can be ran in the background on a server or a client to observe response times as the GraphQL database matures.
            </h1>
            <div className="npmDiv"><button className="npm">INSTALL NPM</button></div>
            <div className="info">
                
            <div>
            <div className="video1">
                <div className="caption2"></div>
                <h3>MONITOR</h3>
                <p>Seamlessly gather data from your server or a specific Graph-Ql endpoint with a single command.</p> 

            </div>
            <div className="video2">
                <div>
                 <video width="800" height="800" autoPlay loop><source src="Mov1.mp4" type="video/mp4" /></video>
                </div> 
                <div className="caption1"> 
                <h3>ANALYZE</h3>
                <p> Examine response times of your queries in simple but effective visualizations. </p>

                </div> 
            </div>
            <h3>CONFIGURE</h3>
            <p>Customize your Watchmo project through our easy to use GUI or CLI tools</p> 
            </div>
            <div className="devTeam">
                
                <h2>
                    
           The Development Team -- APIsomorphic
                </h2>
                <div className="headshots">  
             
                    <img src="/evan.png" className="headshot" id="evan"/>
                    <img src="/jason.png" className="headshot" id="jason"/>
                    <img src="/sarah.png" className="headshot" id="sarah"/>
                    <img src="/spencer.png" className="headshot" id="spencer"/>

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
            </div>
            <br/>
            <div className="beta">watchMo is in beta. Please post any issues to our <a href="https://github.com/oslabs-beta/watchmo">Github</a> - we would love to hear from you!

</div>
        </section>

    )
}

export default App;