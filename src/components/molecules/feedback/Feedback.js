import React from 'react'
import './feedback.css'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import { Link } from 'react-router-dom'

const images = [
  img1,
  img2,
  img3,
  img4
]

class Feedback extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      emailAddress: '',
      feedbackMessage: '',
      value: 1,
      message: '',
      showMessage: false
    }
  }

  updateField (field, newValue) {
    this.setState({ [field]: newValue })
  }

  submitForm = () => {
    fetch('http://localhost:3001/feedback', {
      method: 'POST',
      body: JSON.stringify({
        emailAddress: this.state.emailAddress,
        feedbackMessage: this.state.feedbackMessage,
        username: this.state.username
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => this.displayResult(response.status))
  }

  displayResult = (status) => {
    let message = ''
    this.setState({
      showMessage: true,
      message: status === 200
        ? 'Merci pour votre avis!'
        : 'Votre avis n\'a pas pu être envoyé...'
    }, () => {
      setTimeout(() => {
        this.setState({ showMessage: false })
      }, 2000)
    })
  }

  render = () => {
    return (
      <div className="feedback">
        <div className="feedback-header">
          <h2 className="feedback-header-title">Évaluez-nous !</h2>
          <Link className="feedback-header-close" to="/" >×</Link>
        </div>
        <form className="feedback-form">
          <div className="feedback-form-scale">
            {images.map((image, index) => {
              const value = index + 1
              return (
                <div
                  className="feedback-form-scale-imageContainer"
                  onClick={() => this.updateField('value', value)}
                  style={this.state.value === value ? { background: '#F4F4F4' } : {}}>
                  <img src={image} className="feedback-form-scale-imageContainer-content" />
                </div>
              )
            })}
          </div>
          <input
            className="feedback-form-text feedback-form-emailAddress"
            onChange={(event) => { this.updateField('emailAddress', event.target.value) }}
            placeholder="Renseignez votre nom d'utilisateur..." />
          <input
            className="feedback-form-text feedback-form-username"
            onChange={(event) => { this.updateField('username', event.target.value) }}
            placeholder="Renseignez votre adresse e-mail..." />
          <textarea
            className="feedback-form-text feedback-form-message"
            onChange={(event) => { this.updateField('feedbackMessage', event.target.value) }}
            placeholder="Laissez nous votre message..." />
          <button
            className="feedback-form-submit"
            type="button"
            onClick={this.submitForm}>Envoyer l'évaluation</button>
        </form>
        <p
          className="feedback-message"
          style={{ opacity: this.state.showMessage ? 1 : 0 }}>{ this.state.message}</p>
      </div>
    )
  }
}

export default Feedback