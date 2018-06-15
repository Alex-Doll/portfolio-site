import React, {Component} from 'react';
import '../Stylesheets/About.css';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='container text-left'>
          <p>Hello there! If you're reading this then you probably are wanting to get to know a little bit more about me. If that's not why you're on this page
          then hopefully you'll be delighted nonetheless!</p>
          <p>Once again, my name is Alex. I'm a full-stack software developer with a passion for creating things with code. I'm currently looking for
          employment as a developer so that I can apply and strengthen my skills all day everyday. From focusing in on a solo project to collaborating with
          larger teams, my biggest indicators for success are honesty and open communication. These important skills, along with a passion to always 
          continue learning are my core beliefs in regards to work ethic and software development in general!</p>
          <p>Thanks again for stopping by my portfolio and have a great rest of your day!!!</p>
          <p>- Alex</p>
        </div>
      </div>
    );
  }
}

export default About;