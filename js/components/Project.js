import React, {Component} from 'react';

class Project extends Component {
  render() {
    const { project } = this.props;

    let projectMeta = project.get('meta');
    let projectDetails = project.get('project');

    let pluginsContent = [];
    let componentsContent = [];
    let functionsContent = [];

    projectDetails.get('plugins').map(function(plugin){
      pluginsContent.push(<li>{plugin}</li>);
    });

    projectDetails.get('components').map(function(v, k, i) {
      componentsContent.push(<li>{k}</li>);

      i.getIn([k, 'functions']).map(function(v, k) {
        functionsContent.push(<li>{k}</li>);
      });
    });


    return (
      <div>
        <h1>{projectDetails.get('name') + ' ' + projectDetails.get('version')}</h1>
        <h4>{projectDetails.get('description')}</h4>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Components</h3>
          </div>
          <div className="panel-body">
            <ul>
            {componentsContent}
            </ul>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Functions</h3>
          </div>
          <div className="panel-body">
            <ul>
            {functionsContent}
            </ul>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Plugins</h3>
          </div>
          <div className="panel-body">
            <ul>
            {pluginsContent}
            </ul>
          </div>
        </div>


        <pre>{ JSON.stringify(project.toJS(), null, 4) }</pre>
      </div>
    );
  }
}

export default Project;
