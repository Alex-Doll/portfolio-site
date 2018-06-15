import React, {Component} from 'react';

class Project extends Component {
  render() {
    const {imgSrc, title, description, linkTo} = this.props;
    return (
      <div className='project-custom'>
        <div className='container'>
          <div className='card'>
            <img class="card-img-top" src={imgSrc} alt={title} />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <a href={linkTo} class="btn btn-primary" target='_blank' rel="noopener noreferrer">View Project!</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;