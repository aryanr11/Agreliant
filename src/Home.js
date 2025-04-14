import React from 'react';
import img1 from './assets/img/icon1.png';
import img2 from './assets/img/icon2.png';
import img3 from './assets/img/icon3.png';
import img4 from './assets/img/AgriGold_Seed_Bag.png';
import img5 from './assets/img/LGS_Seed_Bag.png';
import img6 from './assets/img/PRI_Seed_Bag.png';

const Home = () => {
  return (
    <>
        {/* Home Start */}

<div class="home container-fluid">
    <div class="home_img"></div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>DELIVERING ONE-OF-A-KIND, HIGH-PERFORMING <br /> HYBRIDS FARMERS CAN'T GET ANYWHERE ELSE.</h2>
                <div class="justify-content-center d-flex">
                    <div class="btn btn-outline-light home_btn">MORE ABOUT US <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right ms-2" viewBox="0 0 17 17"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></span></div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Home End */}

{/* Info Start */}

<div class="info bg_border section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-12">
                <h3>The name on the bag may be AgriGold<span>®</span>, LG Seeds<span>®</span> or PRIDE Seeds<span>®</span>, <br /> but in every kernel you will find the strength and commitment of AgReliant<span>®</span> Genetics.</h3>
            </div>
        </div>
        <div class="row info_2 pt-5">
            <div class="col-md-4 col-12">
                <div>
                    <h3>RESEARCH</h3>
                    <div class="d-flex justify-content-center">
                        <img src={img1} alt="icon1" style={{width: '100px', height: 'auto'}} />
                    </div>
                    <div class="justify-content-center d-flex">
                        <span>One-of-a-kind, diverse genetics</span>
                    </div>
                    <div class="justify-content-center d-flex">
                        <div class="btn btn-outline-success info_btn">LEARN MORE </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div>
                    <h3>PRODUCTION</h3>
                    <div class="d-flex justify-content-center">
                        <img src={img2} alt="icon2" style={{width: '100px', height: 'auto'}} />
                    </div>
                    <div class="justify-content-center d-flex">
                        <span>Focused solely on seed</span>
                    </div>
                    <div class="justify-content-center d-flex">
                        <div class="btn btn-outline-success info_btn">LEARN MORE </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div>
                    <h3>QUALITY</h3>
                    <div class="d-flex justify-content-center">
                        <img src={img3} alt="icon3" style={{width: '100px', height: 'auto'}} />
                    </div>
                    <div class="justify-content-center d-flex">
                        <span>High-performing hybrids</span>
                    </div>
                    <div class="justify-content-center d-flex">
                        <div class="btn btn-outline-success info_btn">LEARN MORE </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Info End */}

{/* AGRELIANT GENETICS ANNUALLY Start */}

<div class="bg_green section pb-0 agreliant">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>AGRELIANT GENETICS ANNUALLY</h2>
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-md-4 col-12 text-center py-4 border-end border_agreliant">
                <h3>Performs</h3>
                <h2>200,000<span style={{color: '#ffa602'}}>+</span></h2>
                <h3>quality tests & analyses</h3>
            </div>
            <div class="col-md-4 col-12 text-center py-4 border-end border_agreliant">
                <h3>Tests</h3>
                <h2>100,000<span style={{color: '#ffa602'}}>+</span></h2>
                <h3>hybrids</h3>
            </div>
            <div class="col-md-4 col-12 text-center py-4">
                <h3>Plants</h3>
                <h2>480<span style={{color: '#ffa602'}}>+</span></h2>
                <h3>pre-commercial research trials</h3>
            </div>
            <div class="col-md-4 col-12 text-center py-4 border-top border-end border_agreliant">
                <h3>Produces</h3>
                <h2>175<span style={{color: '#ffa602'}}>+</span></h2>
                <h3>different corn hybrids</h3>
            </div>
            <div class="col-md-4 col-12 text-center py-4 border-top border-end border_agreliant">
                <h3>Produces</h3>
                <h2>105<span style={{color: '#ffa602'}}>+</span></h2>
                <h3>soybean varieties</h3>
            </div>
            <div class="col-md-4 col-12 text-center py-4 border-top border_agreliant">
                <h3>Engages</h3>
                <h2>420<span style={{color: '#ffa602'}}>+</span></h2>
                <h3>U.S. farmers for seed production</h3>
            </div>
        </div>
    </div>
</div>

{/* AGRELIANT GENETICS ANNUALLY End */}

{/* Seed bag CAREERS Start */}

<div class="section career">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <h3>At AgReliant, we’ll never stop building, supporting, and nurturing our seed brands.</h3>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-md-4 col-12">
                <img src={img4} alt="agrigold" style={{maxWidth: '100%', width: '379px', height: 'auto'}} />
            </div>
            <div class="col-md-4 col-12">
                <img src={img5} alt="lgs_seed" style={{maxWidth: '100%', width: '379px', height: 'auto'}} />
            </div>
            <div class="col-md-4 col-12">
                <img src={img6} alt="pri_seed" style={{maxWidth: '100%', width: '379px', height: 'auto'}} />
            </div>
        </div>
    </div>
</div>

    </>
  );
};

export default Home;