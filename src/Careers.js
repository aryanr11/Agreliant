import React from 'react';
import img1 from './assets/img/seed_production.png';
import img2 from './assets/img/seed_dealer.jpg';

const Careers = () => {
  return (
    <>
        {/* Home Start */}

        <div class="home container-fluid">
            <div class="home_img6"></div>
            <div class="container">
                <div class="row text-white">
                    <div class="col-12">
                        <h1>FOCUSING ON PEOPLE TO FOCUS SOLELY ON SEED</h1>
                        <h3>Helping farmers grow takes the right people</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Home End */}

        {/* Info Start */}

        <div class="info info_research bg_green bg_border section">
            <div class="container">
                <div class="row">
                    <div class="col-12 justify-content-between d-md-flex align-items-center">
                        <h3>We want the best for our team, fostering a culture of learning, ownership and problem-solving.</h3>
                        <div class="btn btn-outline-light home_btn mt-0">VIEW CURRENT JOBS <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right ms-2" viewBox="0 0 17 17"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></span></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Info End */}

        {/* RESEARCH CAREERS Start */}

        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 align-items-center d-flex">
                        <div class="counter">
                            <p>Our core values are fundamental to our success — we pursue individuals who demonstrate commitment, excellence, integrity, safety and innovation in their work.</p>
                            <p>At AgReliant Genetics, we work to support a culture of learning and involvement, where relationships exist across all facets of the organization. We believe that the best way to improve our business is through strengthening our people, and we create opportunities for our employees to hone their craft.</p>
                            <p>Here you will have the opportunity to be part of a culture where we value our employees’ passions and believe in giving people the space to navigate challenges, invent solutions and excel in a rewarding career.</p>
                            <p>We offer career & internship opportunities in:</p>
                            <ul>
                                <li><a href="/">Research & Plant Breeding</a></li>
                                <li><a href="/">Seed Production</a></li>
                                <li><a href="/">Quality Assurance</a></li>
                                <li><a href="/">Sales</a></li>
                                <li><a href="/">Digital Agriculture</a></li>
                                <li><a href="/">Marketing & Communications</a></li>
                                <li><a href="/">Agronomy</a></li>
                                <li><a href="/">Training & Development</a></li>
                                <li><a href="/">Information Technology</a></li>
                                <li><a href="/">Finance & Administration</a></li>
                                <li><a href="/">Human Resources</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 justify-content-center d-flex">
                        <img src={img1} alt="Seed Production" class="mb_35" style={{maxWidth: '100%', width: '100%', height: 'auto'}} />
                    </div>
                </div>
            </div>
        </div>

        <div class="section bg_green seed_dealers bg_border">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 justify-content-center d-flex">
                        <img src={img2} alt="Seed Dealers" class="mb_35" style={{maxWidth: '100%', width: '100%', height: 'auto'}} />
                    </div>
                    <div class="col-md-6 col-12">
                        <div>
                            <h2>SEED DEALERS</h2>
                            <p>Have you ever considered starting your own seed business? Whether you see a seed business as your full-time job, a part-time job or in addition to your own farming operations, we have options that could work for you. If you’re interested in learning more about our seed dealership opportunities, including internships, contact us here.</p>
                            <div class="btn btn-outline-light home_btn mt-3">MORE ABOUT US <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right ms-2" viewBox="0 0 17 17"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Careers;