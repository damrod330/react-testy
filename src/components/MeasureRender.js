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
      const { id, props, Component } = this.props;
      if (this.mounted) {
        window.performance.mark(`${id}UpdateStart`);
      } else {
        window.performance.mark(`${id}MountStart`);
      }
      return <Component {...props}/>;
    }
  
    componentDidMount() {
      const { id } = this.props;
      this.mounted = true;
      window.performance.mark(`${id}MountEnd`);
      window.performance.measure(`${id}Mount`, `${id}MountStart`, `${id}MountEnd`);
    }
  
    componentDidUpdate() {
      const { id } = this.props;
      window.performance.mark(`${id}UpdateEnd`);
      window.performance.measure(`${id}Update`, `${id}UpdateStart`, `${id}UpdateEnd`);
    }
  }

  export default MeasureRender