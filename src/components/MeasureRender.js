// Credit goes here:
// https://www.telerik.com/blogs/profiling-react-components-with-the-user-timing-api
// Thanks!

import React, { Component } from 'react';

class MeasureRender extends Component {
    constructor() {
      super();
      this.mounted = false;
    }
  
    render() {
      const { name } = this.props;
      if (this.mounted) {
        window.performance.mark(`${name}UpdateStart`);
      } else {
        window.performance.mark(`${name}MountStart`);
      }
      return this.props.children;
    }
  
    componentDidMount() {
      const { name } = this.props;
      this.mounted = true;
      window.performance.mark(`${name}MountEnd`);
      window.performance.measure(`${name}Mount`, `${name}MountStart`, `${name}MountEnd`);
    }
  
    componentDidUpdate() {
      const { name } = this.props;
      window.performance.mark(`${name}UpdateEnd`);
      window.performance.measure(`${name}Update`, `${name}UpdateStart`, `${name}UpdateEnd`);
    }
  }

  export default MeasureRender