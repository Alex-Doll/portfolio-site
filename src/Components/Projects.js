import React, {Component} from 'react';
import Project from './Project';
import '../Stylesheets/Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <div className='container'>
          <Project />
        </div>
      </div>
    );
  }
}

export default Projects;