import React, {Component} from 'react';

class Project extends Component {
  render() {
    return (
      <h1>{this.props.project.get('name')}</h1>
    );
  }
}

export default Project;
