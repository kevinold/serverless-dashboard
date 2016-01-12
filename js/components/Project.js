import React, {Component} from 'react';

class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <pre>{ JSON.stringify(project.toJS(), null, 4) }</pre>
    );
  }
}

export default Project;
