import React from 'react';
import img1 from './assets/img/production-facility.jpg';
import img2 from './assets/img/Counter_Season_1.png';
import img3 from './assets/img/Counter_Season_2.png';

const Production = () => {
  return (
    <>
        {/* Home Start */}

        <div class="home container-fluid">
            <div class="home_img2"></div>
            <div class="container">
                <div class="row text-white">
                    <div class="col-12">
                        <h1>FOCUSED SOLELY ON SEED</h1>
                        <h3>Reliable seed production focused on customers</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Home End */}

        {/* Info Start */}

        <div class="info info_research bg_green bg_border section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-12">
                        <h3>Seed is the genesis of every crop year. And it’s what we spend 100% of our time developing, testing, and delivering to those who grow for a living, with an eye towards future needs.</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Info End */}

        {/* STATE-OF-THE-ART Start */}

        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-12 align-items-center d-flex">
                        <div>
                            <p class="fw-bold">Our AgReliant® Genetics team conducts research on thousands of new products each year, logging more than 50,000 in-season hours of agronomic review of a full 800,000 test plots, with up to 50 measured traits per hybrid.</p>
                            <p>Our research team uses advanced analytical tools, including molecular marker technology, to increase the speed and efficiency of introducing new options to our customers.</p>
                            <h2>STATE-OF-THE-ART <br />SEED PRODUCTION</h2>
                            <p>From the time parent seed is planted to when it’s packaged for customers, we use the latest production technology and techniques in seed harvesting, drying, conditioning, treating, and packaging to maximize quality and to ensure we are delivering the highest yield potential in every bag.</p>
                            <p>We continually invest in all of our facilities to maintain and implement the latest and most effective technologies and practices.</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 justify-content-center d-flex">
                        <img src={img1} alt="production-facility" class="mb_35" style={{maxWidth: '100%', width: '350px', height: 'auto'}} />
                    </div>
                </div>
            </div>
        </div>

        {/* STATE-OF-THE-ART End */}

        <div class="bg_border section bg_lightgray counter">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-6 col-12 justify-content-center d-flex">
                        <img src={img2} alt="Counter_Season_1" class="mb_35" style={{maxWidth: '100%', width: '582px', height: 'auto'}} />
                    </div>
                    <div class="col-md-6 col-12 align-items-center d-flex">
                        <div>
                            <h2>CUSTOMER-DRIVEN <br /> SEED PORTFOLIO</h2>
                            <p>Our production team works directly with our product brand sales teams to develop data-driven, customer-focused service plans.</p>
                            <p>Here at AgReliant Genetics, we clean, size, treat and package the seed prior to distribution, allowing us to pass that value onto our customers by consistently providing the highest-quality products possible.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mb-5">
                    <div class="col-md-8 col-12 align-items-center d-flex">
                        <div>
                            <h3>Why Counter Season?</h3>
                            <ul>
                                <li><a href="/">Speed of introduction</a></li>
                                <li><a href="/">New product availability</a></li>
                                <li><a href="/">Supplement summer production</a></li>
                            </ul>
                            <p>Growers never stop, and neither do we. We use counter-season production to accelerate the introduction of new genetics and increase the availability of our most competitive products for our customers year-round.</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 justify-content-center d-flex">
                        <img src={img3} alt="Counter_Season_2" style={{maxWidth: '100%', width: '237px', height: 'auto'}} />
                    </div>
                </div>
            </div>
        </div>

        {/* RESEARCH CAREERS Start */}

        <div class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 text-center">
                        <h2>PRODUCTION CAREERS</h2>
                        <p>AgReliant® Genetics is continuously looking for individuals who are passionate about building, supporting, and nurturing our seed brands to help our farmer customers grow and achieve their performance goals. Visit our <br /> <a class="career_link" href="/">Careers page</a> to learn more about working at AgReliant® Genetics and our current list of Research opportunities.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* RESEARCH CAREERS End */}
    </>
  );
};

export default Production;