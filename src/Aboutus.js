import React from 'react';
import img1 from './assets/img/AgReliant-web-timeline.jpg';
import img2 from './assets/img/holding-plants.jpeg';

const Aboutus = () => {
  return (
    <>
        {/* Home Start */}

        <div class="home container-fluid">
            <div class="home_img5"></div>
            <div class="container">
                <div class="row text-white">
                    <div class="col-12">
                        <h1> &nbsp;</h1>
                        <h3> &nbsp;</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Home End */}

        {/* Info Start */}

        <div class="info info_research bg_border section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p>AgReliant Genetics is committed to providing trusted seed solutions that help farmers grow. We do this by focusing solely on seed and delivering one-of-a-kind, high performing hybrids. Founded in 2000 by global seed companies KWS and Limagrain, AgReliant Genetics benefits from direct access to a global corn germplasm pool and has a top four corn research program. Through our seed brands – AgriGold® and LG Seeds in the U.S. and PRIDE® Seeds in Canada, we proudly offer the latest innovation to our farmer customers, whether they grow corn, soybeans, sorghum or alfalfa.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Info End */}

        {/* Our Story Start */}

        <div class="bg_lightgray section">
            <div class="container">
                <div class="row justify-content-center d-flex">
                    <div class="col-md-8 col-12 text-center">
                        <h2>OUR STORY</h2>
                        <p>Interested in more about our history? Check out our timeline below.</p>
                        <img src={img1} alt="AgReliant-web-timeline" style={{width: '100%', height: 'auto', maxWidth: '100%'}} class="mt-4" />
                    </div>
                </div>
            </div>
        </div>

        {/* Our Story End */}

        {/* OUR CORE VALUES Start */}

        <div class="section core_value bg_green bg_border">
            <div class="container">
                <div class="row mb-3">
                    <div class="col-12">
                        <h2>OUR CORE VALUES:</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md col-12 border-end border_agreliant">
                        <h3>SAFETY</h3>
                        <p>A commitment to protect the health and well-being of our employees, our contractors, our customers and the communities in which we operate.</p>
                    </div>
                    <div class="col-md col-12 border-end border_agreliant">
                        <h3>COMMITMENT</h3>
                        <p>A personal pledge to take ownership of our actions and outcomes in alignment with the long-term view of our mission.</p>
                    </div>
                    <div class="col-md col-12 border-end border_agreliant">
                        <h3>INTEGRITY</h3>
                        <p>The courage to always do what is right and behave in a manner consistent with our core values.</p>
                    </div>
                    <div class="col-md col-12 border-end border_agreliant">
                        <h3>EXCELLENCE</h3>
                        <p>The application of knowledge, skills, abilities and resources to continuously improve and achieve outstanding results.</p>
                    </div>
                    <div class="col-md col-12">
                        <h3>INNOVATION</h3>
                        <p>The drive to discover, develop and implement creative ideas and approaches to generate value, solve problems and improve products.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* OUR CORE VALUES End */}

        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 align-items-center d-flex">
                        <div class="counter">
                            <h2>GIVING FOR GOOD</h2>
                            <p>Here at AgReliant Genetics, we are committed to farmer success and protecting the health and well-being of our employees, our contractors, our customers and the communities in which we operate. Together, we work to create a positive impact through meaningful investments in the communities in which we work and serve.</p>
                            <p>Our employees throughout the U.S. and Canada are highly engaged in contributing to local economies, volunteering their time and talent to meet the needs of our communities.</p>
                            <p>We focus our efforts on:</p>
                            <ul>
                                <li><a href="/">Serving our customers</a></li>
                                <li><a href="/">Preparing tomorrow’s workforce, innovators and leaders by supporting K-12 agricultural education</a></li>
                                <li><a href="/">Addressing food insecurity at both the local level through food drives and donations, and at the global level by investing in research and initiatives that promote sustainable food production for our growing world</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 justify-content-center d-flex">
                        <img src={img2} alt="holding-plants" class="mb_35" style={{maxWidth: '100%', width: '100%', height: 'auto'}} />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Aboutus;