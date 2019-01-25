import React, { Component } from 'react'
import Cta from "components/atomes/Cta"
import "./header.css"
import { withCursorContext } from '../../../contexts/cursor/cursor.context';

export class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.cta = React.createRef();
  }
  render() {
    return (
      <div className="header">
        <div className="logo">
          <a href="/"
            onMouseEnter={(e) => {
              this.props.cursor_context.hoverHandler(e.currentTarget, "LINK");
            }}
            onMouseLeave={() => {
              this.props.cursor_context.hoverHandler();
            }}
            customRef={(ref) => this.cta = ref}
          ><span className="t-main-color">f</span>society</a>
        </div>
        <div className="ctas">
          <Cta
            text="En savoir plus"
            onClick={() => console.log("click savoir plus")}
            onMouseEnter={(e) => {
              this.props.cursor_context.hoverHandler(e.currentTarget, "LINK");
            }}
            onMouseLeave={() => {
              this.props.cursor_context.hoverHandler();
            }}
            customRef={(ref) => this.cta = ref}
          />
          <Cta
            text="Donnez votre avis"
            onClick={() => console.log("click avis")}
            onMouseEnter={(e) => {
              this.props.cursor_context.hoverHandler(e.currentTarget, "LINK");
            }}
            onMouseLeave={() => {
              this.props.cursor_context.hoverHandler();
            }}
            customRef={(ref) => this.cta = ref}
          />
          <Cta
            text="Crédits"
            onClick={() => console.log("click crédits")}
            onMouseEnter={(e) => {
              this.props.cursor_context.hoverHandler(e.currentTarget, "LINK");
            }}
            onMouseLeave={() => {
              this.props.cursor_context.hoverHandler();
            }}
            customRef={(ref) => this.cta = ref}
          />
        </div>
      </div>
    )
  }
}

export default withCursorContext(Header)
