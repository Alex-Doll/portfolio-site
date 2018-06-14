import React, {Component} from 'react';
import Project from './Project';
import '../Stylesheets/Projects.css';
import projectsData from '../projectsData';

class Projects extends Component {
  render() {
    const projects = projectsData.map((project, index) => {
      let {imgSrc, title, description, linkTo, technologiesUsed} = project;
      return (
        <div className='col-lg-4'>
          <Project 
            imgSrc={imgSrc}
            title={title}
            description={description}
            linkTo={linkTo}
            technologiesUsed={technologiesUsed}
          />
        </div>
      );
    });
    
    return (
      <div className='projects'>
        <div class="container">
          <div class="row">
            {projects}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;