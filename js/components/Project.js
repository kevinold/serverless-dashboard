import React, {Component} from 'react';

class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <div>
        <h1>{project.get('name')}</h1>
        <pre>{ JSON.stringify(project.toJS(), null, 4) }</pre>
      </div>
    );
  }
}

export default Project;
