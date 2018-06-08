import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    let {onViewLandingClick} = this.props;
    
    return (
      <footer>
        <Link to='/'>
          <button onClick={onViewLandingClick}>
            View Landing
          </button>
        </Link>
      </footer>
    );
  }
}

export default Footer;