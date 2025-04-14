import React from 'react';
import img1 from './assets/img/LogoWhite.png'

const Footer = () => {
  return (
    <>
        {/* Footer Start */}

        <footer>
            {/* Footer Top */}
            <div class="footer_top bg-black text-white section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <a href="/"><img src={img1} alt="Logo" style={{maxWidth: '100%', width: '300px', height: 'auto'}} /></a>
                            <div class="d-flex social_icon justify-content-center">
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16"><path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/></svg></div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/></svg></div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></div>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <h3>AgReliant Genetics, LLC (U.S.)</h3>
                            <p>1122 East 169th Street <br /> Westfield, IN 46074 <br /> <a href="/">(317) 896-5552</a></p>
                            <h4>AgReliant Genetics Inc. (CAN)</h4>
                            <p>6836 Pain Court Line <br />Pain Court, ON N0P 1Z0</p>
                        </div>
                        <div class="col-md-4 col-12">
                            <h3>Important Links</h3>
                            <ul>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">News&Media</a></li>
                                <li><a href="/">Store</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Website Terms of Use</a></li>
                                <li><a href="/">Our Leadership Team</a></li>
                                <li><a href="/">Human Resources Documents</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div class="bg_gray section">
                <div class="container">
                    <div class="row copyright">
                        <div class="col-12">
                            <p>© 2025 AgReliant Genetics, LLC. All rights reserved. <br /> ®Trademark of AgReliant Genetics or an affiliated company of AgReliant Genetics. <br />Thanks to <a href="/">Shout It Out Design</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        {/* Footer End */}
    </>
  );
};

export default Footer;