import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div class='footer'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-4 col-xs-12'>
              <div class='first '>
                <h4 className='text-start'> About Us</h4>
                <div className='text-start'>
                  <p> gallerying With Us</p>
                  <p> Be Our Partner</p>
                </div>
              </div>
            </div>

            <div class='col-md-4 col-xs-12'>
              <div class='second text-start '>
                <h4 className='text-start'> Navigate</h4>
                <ul className=''>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Privacy & Policy </a>
                  </li>
                  <li>
                    <a href='#'> Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-md-4 col-xs-12'>
              <div class='third'>
                <h4 className='text-start'> Support</h4>
                <ul className='text-start'>
                  <li> Customer Support</li>
                  <li>Privacy & Policy</li>

                  <li>Terms & Condition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-12'>
              <div class='line'></div>

              <i class='fab fa-youtube fa-2x margin'></i>
            </div>
            <div className='text-white mb-5'>
              Copyright @ 2021 DRONE all right reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
