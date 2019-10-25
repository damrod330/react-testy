import React, { Component } from 'react'

export default class DomAddToListTest extends Component {

    static getDerivedStateFromProps(props, current_state) {
        return {
            items: [...current_state.items, {html: props.html}]
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    render() {
        const itemList = this.state.items.map((item,index) => {
            return ( <li key={index} > { item.html } </li>)})
        return (<ul>{itemList}</ul>)
    }
}
            

