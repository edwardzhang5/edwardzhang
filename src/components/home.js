import React from 'react';
import FeaturedSlider from './FeaturedSlider';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Navbar from './assets/Navbar';


class Home extends React.Component {

    render() {
        return (
            <div>
                {/* Start Header */}
                <header id="mu-header" className="" role="banner">
                    <div className="container">
                        <Navbar/>
                    </div>
                </header>
                {/* End Header */}

                {/* Start Featured Slider */}

                <section id="mu-featured-slider">
                    <FeaturedSlider/>
                </section>

                
                {/* Start main content */}

                <main role="main">

                    {/*  Start About */}
                    <section id="mu-about">
                        <About/>
                    </section>
                    {/* End About */}

                    {/* Start Portfolio */}
                    <section id="mu-portfolio">
                        <Portfolio/>
                    </section>
                    {/* End Portfolio */}

                    {/* Start Contact */}
                    <section id="mu-contact">
                        <Contact/>
                    </section>
                    {/* End Contact */}

                </main>

                {/* End main content */}


            </div>
        )
    }
}

export default Home;