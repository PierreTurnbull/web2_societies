import React from 'react'
import './feedback.css'

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
            <img className="feedback-form-scale-imageContainer-content" />
          </div>
          <div className="feedback-form-scale-imageContainer">
            <img className="feedback-form-scale-imageContainer-content" />
          </div>
          <div className="feedback-form-scale-imageContainer">
            <img className="feedback-form-scale-imageContainer-content" />
          </div>
          <div className="feedback-form-scale-imageContainer">
            <img className="feedback-form-scale-imageContainer-content" />
          </div>
        </div>
        <input className="feedback-form-emailAddress" placeholder="Renseignez votre nom d'utilisateur..." />
        <input className="feedback-form-username" placeholder="Renseignez votre adresse e-mail..." />
        <textarea className="feedback-form-message" placeholder="Laissez nous votre message..." />
        <button className="feedback-form-submit" type="button">Envoyer l'évaluation</button>
      </form>
    </div>
  )
}
