import React from 'react';
import '../stylesheets/style.css';
import { Link } from "react-router-dom";

function App(props) {

    return (
        <section className="outerContainer">
            <div>
                <img className="banner" src="https://colorfully.eu/wp-content/uploads/2012/11/cat-with-glasses-facebook-cover.jpg" />

                <img className="logo" src="logo.png"></img>
                <h1>
                    A server-side resolver response time detection tool for monitoring the health status of your GraphQL architecture.
                        The tool can be ran in the background on a server or a client to observe response times as the GraphQL database matures.
            </h1>
                <div>
                    <img src="/evan.png" className="evan" />
                    <img src="/jason.png" className="jason" />
                    <img src="/sarah.png" className="sarah" />
                    <img src="/spencer.png" className="spencer" />

                </div>
                <br />
                <div>
                    <a href="https://www.linkedin.com/in/evan-hilton-694976b0/">
                        <img
                            className="linkedInImage"
                            src="/linkedinlogo.png"
                        /> </a>
                    <a href="https://github.com/EH1537">
                        <img
                            className="githubImage"
                            src="/githublogo.png"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/jasonroyjones/">
                        <img
                            className="linkedInImage"
                            src="/linkedinlogo.png"
                        /> </a>
                    <a href="https://github.com/JsonRoyJones">
                        <img
                            className="githubImage"
                            src="/githublogo.png"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/sarah-song-65702b89/">
                        <img
                            className="linkedInImage"
                            src="/linkedinlogo.png"
                        /> </a>
                    <a href="https://github.com/zavagezong">
                        <img
                            className="githubImage"
                            src="/githublogo.png"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/spencerwyman/">
                        <img
                            className="linkedInImage"
                            src="/linkedinlogo.png"
                        /> </a>
                    <a href="https://github.com/spencerWyman">
                        <img
                            className="githubImage"
                            src="/githublogo.png"
                        />
                    </a>
                </div>

            </div>

        </section>

    )
}

export default App;