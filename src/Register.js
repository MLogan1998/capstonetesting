import React from 'react';

import { Link } from 'react-router-dom'

import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'

import './Register.css'

function Register() {
    return (
      <div>
          <HomeHeader />
              <div className="homescreen__footer">
                  <form action="#" className="form">
                      <div className="form__group">
                          <input id="name" type="text" className="form__input" placeholder="Full Name" required></input>
                          <label htmlFor="name" className="form__label">Full Name</label>
                      </div>
                      <div className="form__group">
                          <input id="email" type="email" className="form__input" placeholder="Email Address" required></input>
                          <label htmlFor="email" className="form__label">Email Address</label>
                      </div>
                      <div className="form__group">
                          <input id="password" type="password" className="form__input" placeholder="Password" required></input>
                          <label htmlFor="password" className="form__label">Password</label>
                      </div>
                      <div class="form__group">
                          <div class="form__radio-group">
                              <input id="small" type="radio" class="form__radio-input" name="size"></input>
                              <label for="small" class="form__radio-label">
                                  <span class="form__radio-button"></span>
                                  Employer
                              </label>
                          </div>
                          <div class="form__radio-group u-margin-bottom-4">
                              <input id="large" type="radio" class="form__radio-input" name="size"></input>
                              <label for="large" class="form__radio-label">
                                  <span class="form__radio-button"></span>
                                  Seeker
                              </label>
                          </div>
                      </div>
                      <div className="form__group">
                          <Link to="/register" class="btn-form">Register</Link>
                      </div>
                  </form>
              </div>
          <HomeFooter />
      </div>
    )
}

export default Register;
