import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-con">
        <h1>E-Commerce</h1>
        <div className="cart-quant">
          <img
            src="data:image/png;base64,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"
            alt="cart"
            className="cart-img"
          />
          <p className="cart-items">0</p>
        </div>
      </div>
    )
  }
}

export default Header
