import React, { Component } from 'react'

export default class DomListTest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            itemList: this.props.itemList,
            newItem: this.props.newItem,
            editItem: this.props.editItem,
            removeId: this.props.removeId
        }
    }

    render() {
        const list = this.state.itemList.map(item => {
            return (<li key={item.id}>{item.text}</li>)
        })
        return (
            <ul>
                {list}
            </ul>
        )
    }
}
