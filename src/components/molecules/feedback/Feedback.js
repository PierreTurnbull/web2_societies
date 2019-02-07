import React from 'react'
import './feedback.css'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'

export default () => {
  return (
    <div className="feedback">
      <div className="feedback-header">
        <h2 className="feedback-header-title">Évaluez-nous !</h2>
        <span className="feedback-header-close">×</span>
      </div>
      <form className="feedback-form">
        <div className="feedback-form-scale">
          <div className="feedback-form-scale-imageContainer">
            <img src={img1} className="feedback-form-scale-imageContainer-content" />
          </div>
          <div className="feedback-form-scale-imageContainer">
            <img src={img2} className="feedback-form-scale-imageContainer-content" />
          </div>
          <div className="feedback-form-scale-imageContainer">
            <img src={img3} className="feedback-form-scale-imageContainer-content" />
          </div>
          <div className="feedback-form-scale-imageContainer">
            <img src={img4} className="feedback-form-scale-imageContainer-content" />
          </div>
        </div>
        <input className="feedback-form-text feedback-form-emailAddress" placeholder="Renseignez votre nom d'utilisateur..." />
        <input className="feedback-form-text feedback-form-username" placeholder="Renseignez votre adresse e-mail..." />
        <textarea className="feedback-form-text feedback-form-message" placeholder="Laissez nous votre message..." />
        <button className="feedback-form-submit" type="button">Envoyer l'évaluation</button>
      </form>
    </div>
  )
}
