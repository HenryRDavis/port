import React from 'react'

const Home = () => {

    return (
        <div>
            <h1>Welcome</h1>
            <br/>
            <h3>Below are my projects</h3>

            <div class="images">
            <section>
            <img id='first' src="images/Screenshot (48).png"/>
            <a id='link' href="https://confident-golick-fc1dc6.netlify.app">My first paired programming project</a>
            </section>
            <section>
            <img id='second'src="images/Screenshot (62).png" alt="black furred dog sitting down looking upwards at the camera"/>
            <a id='link' href="https://secret-family-recipes-for-all.netlify.app">My first Build Week</a>
            </section>
            <section>
            <img id='third' src="" alt="web page with a dark grey back ground with a list of people from an animation company from Studio Ghibli."/>
            <a id='link' href="https://react-redux-app-three-phi.vercel.app">First React App from Scratch</a>
            </section>
            </div>
        </div>
    )
}

export default Home
