import React from 'react';
import img1 from './assets/img/Soybean-seedlings.jpeg';
import img2 from './assets/img/sprout.jpg';

const Quality = () => {
  return (
    <>
        {/* Home Start */}

        <div class="home container-fluid">
            <div class="home_img3"></div>
            <div class="container">
                <div class="row text-white">
                    <div class="col-12">
                        <h1>HIGH-PERFORMAING HYBRIDS</h1>
                        <h3>Reliable quality testing providing trusted seed solutions</h3>
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
                        <h3>Our pre-commercial research system reduces variables, increases accuracy, and gives AgReliant<span>®</span> Genetics an even more authentic pulse on short- and long-term market needs to continue developing high-performing hybrids.</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Info End */}

        {/* STATE-OF-THE-ART Start */}

        <div class="bg_lightgray section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-6 col-12 align-items-center d-flex">
                        <div>
                            <h2>ONLY THE BEST</h2>
                            <p>In total, our quality assurance lab performs 190,000 tests and analyses annually to provide the best products for our customers’ acres.</p>
                            <p>We strive to go above and beyond standard purity checks for our customers. Using electrophoresis testing, which separates the protein of plant material based upon electric charge, we can identify the unique “fingerprint” of each product variety. This quality assurance technique helps our team verify consistency and reliability of our multiple trait options.</p>
                            <p>We’re intensely particular about what goes into the bag. Of the 70,000+ hybrids we test, only .02% make the performance cut and make it to a seed bag. This level of selectivity means farmers can be confident in our seed performance, with a seed portfolio offering multiple traits that drives genetic gain on every acre to achieve yield and production goals.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 justify-content-center d-flex">
                        <img src={img2} alt="production-facility" class="mb_35" style={{maxWidth: '100%', width: '450px', height: '350px'}} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-12 justify-content-center d-flex">
                        <img src={img1} alt="production-facility" class="mb_35" style={{maxWidth: '100%', width: '450px', height: '400px'}} />
                    </div>
                    <div class="col-md-6 col-12 align-items-center d-flex">
                        <div class="counter">
                            <h2>WE WANT THE BEST FOR OUR BRANDS</h2>
                            <ul>
                                <li><a href="/">AgReliant Genetics is a member of Excellence Through Stewardship (ETS), a global not-for-profit organization that promotes the universal adoption of stewardship programs and quality management systems for the full life cycle of agricultural technology products. ETS assists members in the development or improvement of stewardship programs and quality management systems and then facilitates third-party audits to verify them.</a></li>
                                <li><a href="/">Our processes and procedures have been approved by the USDA through their Process Verified Program. This certification recognizes the strength of our quality management system for testing each product.</a></li>
                                <li><a href="/">Our team includes accredited seed graders, registered seed and genetic technologists – certified through the Society of Commercial Seed Technologists.</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* STATE-OF-THE-ART End */}

        {/* RESEARCH CAREERS Start */}

        <div class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 text-center">
                        <h2>QUALITY ASSURANCE CAREERS</h2>
                        <p>AgReliant® Genetics is continuously looking for individuals who are passionate about building, supporting, and nurturing our seed brands to help our farmer customers grow and achieve their performance goals. Visit our <br /> <a class="career_link" href="/">Careers page</a> to learn more about working at AgReliant® Genetics and our current list of Research opportunities.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* RESEARCH CAREERS End */}
    </>
  );
};

export default Quality;