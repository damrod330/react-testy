import React, { Component } from 'react'

export default class DomTextTest extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <h3>{this.props.text}</h3>
                <p>{this.props.text}</p>
                <span>{this.props.text}</span> <br/>
                <label>{this.props.text}</label>
            </div>
        )
    }
}
