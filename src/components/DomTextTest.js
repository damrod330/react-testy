import React, { Component } from 'react'

export default class Test0 extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <h3>{this.props.text}</h3>
                <p>{this.props.text}</p>
                <a href="">{this.props.text}</a> <br/>
                <span>{this.props.text}</span> <br/>
                <label>{this.props.text}</label>
            </div>
        )
    }
}
