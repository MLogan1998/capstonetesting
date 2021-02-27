import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import './CreateJob.css'

function CreateJob() {
  const onClickEvent = () => {
    const navButtons = document.getElementById("navi-toggle");
    navButtons.checked = false;
  }




  //FOR LAYOUT ONLY, CAN NOT USE FORM -LABELS INPUTS ETC
  return (
    <div className="homeboy-container">
      <NavButton />
      <div className="list-container">
        <h1 className="profile__screen__heading">create job</h1>
        <form action="#" className="form">
          <div className="form__group">
              <input id="name" type="text" className="form__input" placeholder="Job Title" required></input>
              <label htmlFor="name" className="form__label">Job Title</label>
          </div>
          <div className="form__group">
              <textarea id="pdes" rows="6" className="form__input" placeholder="Job Description (Max 300 Characters)" required></textarea>
              <label htmlFor="pdes" className="form__label">Job Description</label>
          </div>
          <div class="form__group pro__form">
            <div class="form__radio-group">
              <input id="java" type="radio" class="form__radio-input" name="tech"></input>
              <label for="java" class="form__radio-label">
                <span class="form__radio-button"></span>
                Front End
              </label>
          </div>
            <div class="form__radio-group u-margin-bottom-4">
                <input id="django" type="radio" class="form__radio-input" name="tech"></input>
                <label for="django" class="form__radio-label">
                    <span class="form__radio-button"></span>
                  Back End
                </label>
            </div>
            <div class="form__radio-group u-margin-bottom-4">
                <input id="python" type="radio" class="form__radio-input" name="tech"></input>
                <label for="python" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    Full Stack
                </label>
            </div>
        </div>
        <div className="form__group">
              <textarea id="pdes" rows="6" className="form__input" placeholder="Tell Us About Your Team (Max 300 Characters)" required></textarea>
              <label htmlFor="pdes" className="form__label">Job Description</label>
          </div>
        <div className="form__group">
              <input id="teched" type="text" className="form__input" placeholder="$ Salary (Not Required)" required></input>
              <label htmlFor="teched" className="form__label">Salary</label>
          </div>
          <div class="form__group pro__form">
            <div class="form__radio-group">
              <input id="java" type="radio" class="form__radio-input" name="tech"></input>
              <label for="java" class="form__radio-label">
                <span class="form__radio-button"></span>
                Benefits
              </label>
          </div>
            <div class="form__radio-group u-margin-bottom-4">
                <input id="django" type="radio" class="form__radio-input" name="tech"></input>
                <label for="django" class="form__radio-label">
                    <span class="form__radio-button"></span>
                 Benefits Not Offered
                </label>
            </div>
        </div>
          <Link className="list__screen__link" to="/register">start swiping &rarr;</Link>
        </form>
      </div>
    </div>

  )
}

export default CreateJob;
