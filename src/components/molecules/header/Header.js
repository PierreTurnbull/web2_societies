import React, { Component } from 'react'
import Cta from "components/atomes/Cta"
import "./header.css"

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <a href="/"><span className="t-main-color">f</span>society</a>
        </div>
        <div className="ctas">
          <Cta text="En savoir plus" onClick={() => console.log("click")} />
          <Cta text="Donnez votre avis" onClick={() => console.log("click")} />
          <Cta text="Crédits" onClick={() => console.log("click")} />
        </div>
      </div>
    )
  }
}

export default Header
