import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faMobileAlt,
  faAt,
} from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='contact-container mt-5 rounded-3'>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='section-title text-center mt-3'>
            <span className='text-white fw-bolder'>Contact Us</span>
            <h2 className='mb-5 fw-bolder'>
              If You Have any Question <br /> Drop a Message
            </h2>
          </div>
        </div>
      </div>

      <div className='row align-items-center '>
        <div className='col-lg-7 col-sm-12 col-xs-12 d-block mx-auto'>
          <div className='contact'>
            <form>
              <div className='row'>
                <div className='form-group col-md-6 mb-2'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    id='first-name'
                    placeholder='Name'
                    required='required'
                  />
                </div>
                <div className='form-group col-md-6 mb-2'>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='first-email'
                    placeholder='Email'
                    required='required'
                  />
                </div>
                <div className='form-group col-md-12 mb-2'>
                  <input
                    type='text'
                    name='subject'
                    className='form-control'
                    id='subject'
                    placeholder='Subject'
                    required='required'
                  />
                </div>
                <div className='form-group col-md-12'>
                  <textarea
                    rows='6'
                    name='message'
                    className='form-control'
                    id='description'
                    placeholder='Your Message'
                    required='required'
                  ></textarea>
                </div>
                <div className='col-md-12'>
                  <div className='actions text-left'>
                    <input
                      type='submit'
                      name='submit'
                      className='btn btn-lg btn-danger  mt-3 mb-3'
                      title='Submit Your Message!'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='col-lg-5 col-sm-12 col-xs-12 d-block mx-auto contact-info'>
          <div
            className='contact_address text-left '
            style={{ fontSize: '20px' }}
          >
            <div className='d-flex  mx-5'>
              <FontAwesomeIcon
                className='my-1'
                style={{
                  color: 'orangered ',
                }}
                icon={faMapMarkerAlt}
              />
              <p className='mx-3'>Yantai , China</p>
            </div>

            <div className=' d-flex mx-5'>
              <FontAwesomeIcon
                className='my-1'
                style={{ color: 'orangered' }}
                icon={faMobileAlt}
              />
              <p className='mx-3'>
                (+86) 740-395-3829 <br />
              </p>
            </div>

            <div className=' d-flex  mx-5'>
              <FontAwesomeIcon
                className='my-1'
                style={{ color: 'orangered' }}
                icon={faAt}
              />
              <p className='mx-3'>help@travelvela.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
