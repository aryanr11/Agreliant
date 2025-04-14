import React from 'react';
import img1 from './assets/img/corn.jpg';

const Research = () => {
  return (
    <>
        {/* Home Start */}

        <div class="home container-fluid">
            <div class="home_img1"></div>
            <div class="container">
                <div class="row text-white">
                    <div class="col-12">
                        <h1>ONE-OF-A-KIND, DIVERSE GENETICS</h1>
                        <h3>For higher yields and happy customers</h3>
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
                        <h3>As the largest North American company focused solely on seed, AgReliant<span>®</span> Genetics invests heavily in genetic innovation to deliver one-of-a-kind, high-performing hybrids farmers can’t get anywhere else.</h3>
                        <h3>AgReliant<span>®</span> Genetics is the only seed-only parent company with a vast, unique genetic library to deliver diverse seed options from never-seen-in North America germplasm.</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Info End */}

        {/* HOW ARE WE DIFFERENT Start */}

        <div class="bg_lightgray section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-12 align-items-center d-flex">
                        <div>
                            <h2>HOW ARE WE DIFFERENT?</h2>
                            <p>Our research program is driven by a commitment to research and development based on actual farm conditions and a significant investment in discovery of new, diverse genetic options to help farmers confidently manage natural challenges such as weather, diseases and pests.</p>
                            <p>Our local, regional, and global research and testing network ensures we are continuously bringing the highest performing seed portfolio that drives genetic gain on every acre. We don’t simply breed for higher yield; we breed for environmental adaptability and optimal plant health. Then we provide a personalized agronomic road map for our customers precisely tuned to a particular hybrid’s genetic characteristics to get the most out of every acre while minimizing risk.</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 justify-content-center d-flex">
                        <img src={img1} alt="corn" style={{maxWidth: '100%', width: '350px', height: 'auto'}} />
                    </div>
                </div>
            </div>
        </div>

        {/* HOW ARE WE DIFFERENT End */}

        {/* RESEARCH CAREERS Start */}

        <div class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 text-center">
                        <h2>RESEARCH CAREERS</h2>
                        <p>AgReliant® Genetics is continuously looking for individuals who are passionate about building, supporting, and nurturing our seed brands to help our farmer customers grow and achieve their performance goals. Visit our <br /> <a class="career_link" href="/">Careers page</a> to learn more about working at AgReliant® Genetics and our current list of Research opportunities.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* RESEARCH CAREERS End */}
    </>
  );
};

export default Research;