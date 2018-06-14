import React, {Component} from 'react';
import '../Stylesheets/Home.css';

class Home extends Component {
  render() {
    return (
      <section className='home container'>
        <div className='container'>
          <div>
            <h3>Greetings Adventurer</h3>
            <h1>My name is Alex Doll</h1>
            <h1>I'm a web developer based in Austin, TX.</h1>
            <p>This portfolio is yours to explore. 
            Whether you want to learn more about me or simply check out some of my work, 
            there is plenty for you to enjoy!</p>
          </div>
          <p className='joke-line'>The real treasure all along was my portfolio...or was it friendship?</p>
        </div>
      </section>
    );
  }
}

export default Home;