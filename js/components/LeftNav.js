import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class LeftNav extends Component {
  render() {

    const { project } = this.props;

    return (
      <ul className="nav nav-pills nav-stacked">
        <li role="presentation"><a href="#">Overview</a></li>
        <li role="presentation"><a href="#">Local</a></li>

        <li role="presentation" className="active"><a href="#">{ project.get('name') }</a></li>

        <li role="presentation"><a href="#">Remote</a></li>
        <li role="presentation"><a href="#">Monitoring</a></li>
      </ul>
    );
  }
}

export default LeftNav;
