import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import './CreateProfile.css'

function CreateProfile() {
  const onClickEvent = () => {
    const navButtons = document.getElementById("navi-toggle");
    navButtons.checked = false;
  }

  return (
    <div className="homeboy-container">
      <NavButton />
      <div className="list-container">
        <h1 className="profile__screen__heading">create profile</h1>
        <form action="#" className="form">
          <div className="form__group">
              <input id="name" type="text" className="form__input" placeholder="GitHub Username" required></input>
              <label htmlFor="name" className="form__label">GitHub Username</label>
          </div>
          <div className="form__group">
              <input id="pname" type="text" className="form__input" placeholder="Project Name" required></input>
              <label htmlFor="pname" className="form__label">Project Name</label>
          </div>
          <div className="form__group">
              <textarea id="pdes" rows="6" className="form__input" placeholder="Project Description (Max 300 Characters)" required></textarea>
              <label htmlFor="pdes" className="form__label">Project Description</label>
          </div>
          <div className="form__group">
              <input id="pimg" rows="6" type="file" className="form__input" placeholder="Project Description (Max 300 Characters)" required></input>
              <label htmlFor="pimg" className="form__label">Project Screenshot</label>
          </div>
          <div class="form__group pro__form">
            <div class="form__radio-group">
              <input id="java" type="radio" class="form__radio-input" name="tech"></input>
              <label for="java" class="form__radio-label">
                <span class="form__radio-button"></span>
                JavaScript
              </label>
          </div>
            <div class="form__radio-group u-margin-bottom-4">
                <input id="django" type="radio" class="form__radio-input" name="tech"></input>
                <label for="django" class="form__radio-label">
                    <span class="form__radio-button"></span>
                   Django
                </label>
            </div>
            <div class="form__radio-group u-margin-bottom-4">
                <input id="python" type="radio" class="form__radio-input" name="tech"></input>
                <label for="python" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    Python
                </label>
            </div>
            <div class="form__radio-group u-margin-bottom-4">
                <input id="react" type="radio" class="form__radio-input" name="tech"></input>
                <label for="react" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    React
                </label>
            </div>
        </div>
        <div className="form__group">
              <textarea id="code" rows="6" className="form__input" placeholder="What do you love about coding? (Max 300 Characters)" required></textarea>
              <label htmlFor="code" className="form__label">Project Description</label>
        </div>
        <div className="form__group">
              <input id="teched" type="text" className="form__input" placeholder="Technical Education" required></input>
              <label htmlFor="teched" className="form__label">Technical Education</label>
          </div>
          <Link className="list__screen__link" to="/register">start swiping &rarr;</Link>
        </form>
      </div>
    </div>

  )
}

export default CreateProfile;
