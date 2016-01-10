import React from 'react';
import Immutable from 'immutable';
import TestUtils from 'react-addons-test-utils';
import Project from '../Project';
import { expect } from 'chai';

describe("Project", function() {

  let renderedComponent;
  let mockProject = Immutable.Map({ name: 'Test' });

  beforeEach(function() {
    renderedComponent = TestUtils.renderIntoDocument(<Project project={mockProject} />);
  });

  it("should render", function() {
    expect(renderedComponent).to.be.defined;
  });

});

