import React from 'react'
import { withCursorContext } from '../../../contexts/cursor/cursor.context';
import { withRouter } from "react-router-dom";
import { compose } from 'recompose';
import Lottie from 'react-lottie';
import logoAnimationData from './logo_anim.json'
import Cta from "components/atomes/Cta"
import "./header.css"

export class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playAnim: false,
      isMobile: false,
      menuOpen: false
    }

    this.cta = React.createRef();
    this.lottieRef = React.createRef();
    this.defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: logoAnimationData,
      name: "logoAnim",
      // onComplete: () => { console.log("complete") },
      // onEnterFrame: () => { console.log("complete") },
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  }

  componentDidMount() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    if (window.innerWidth <= 768) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.cursor_context.state.cursorParams.node !== null && nextProps.cursor_context.state.cursorParams.node !== this.props.cursor_context.state.cursorParams.node && this.state.playAnim === false) {
  //     console.log("upadta");
  //     return true
  //   }
  //   console.log("no update");
  //   return false
  // }

  render() {
    return (
      <div className="header">
        <div className="logo">
          <a href={!this.state.isMobile ? '/' : 'https://www.instagram.com/fsocietywebdoc'} target={this.state.isMobile ? 'blank' : 'null'}
            onMouseEnter={(e) => {
              this.props.cursor_context.state.hoverHandler(e.currentTarget, "LOGO");
              this.lottieRef.current.anim.setDirection(1);
              this.lottieRef.current.anim.play();
              this.setState({
                playAnim: true
              });
              // this.lottieRef.current.anim.addEventListener('complete', () => {
              //   console.log("end");w
              //   this.lottieRef.current.anim.setDirection(-1);
              //   this.lottieRef.current.anim.play();
              // });
            }}
            onMouseLeave={() => {
              this.props.cursor_context.state.hoverHandler();
              this.lottieRef.current.anim.setDirection(-1);
              this.lottieRef.current.anim.play();
              this.setState({
                playAnim: true
              });
            }}
            customRef={(ref) => this.cta = ref}>
            <Lottie
              options={this.defaultOptions}
              width={170}
              ref={this.lottieRef}
              // isPaused={!this.state.playAnim}
              onComplete={() => console.log("end")
              }
            />
            {/* <span className="t-main-color">f</span>society */}
          </a>
        </div>
        {
          this.state.isMobile && (
            <i
              className="material-icons"
              style={{ color: 'white' }}
              onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
            >
              more_horiz
          </i>
          )
        }
        {this.state.menuOpen && <p>fefse</p>}
        <div className="ctas">
          <Cta
            text="En savoir plus"
            onClick={() => this.props.history.push('informations')}
            onMouseEnter={(e) => {
              this.props.cursor_context.state.hoverHandler(e.currentTarget, "LINK");
            }}
            onMouseLeave={() => {
              this.props.cursor_context.state.hoverHandler();
            }}
            customRef={(ref) => this.cta = ref}
          />
          <Cta
            text="Donnez votre avis"
            onClick={() => this.props.history.push('avis')}
            onMouseEnter={(e) => {
              this.props.cursor_context.state.hoverHandler(e.currentTarget, "LINK");
            }}
            onMouseLeave={() => {
              this.props.cursor_context.state.hoverHandler();
            }}
            customRef={(ref) => this.cta = ref}
          />
          <Cta
            text="Crédits"
            onClick={() => this.props.history.push('credits')}
            onMouseEnter={(e) => {
              this.props.cursor_context.state.hoverHandler(e.currentTarget, "LINK");
            }}
            onMouseLeave={() => {
              this.props.cursor_context.state.hoverHandler();
            }}
            customRef={(ref) => this.cta = ref}
          />
        </div>
      </div>
    )
  }
}

export default compose(withCursorContext, withRouter)(Header)
