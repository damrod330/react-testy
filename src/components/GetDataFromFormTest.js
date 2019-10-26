import React, { Component } from 'react'

export default class GetDataFromFormTest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    static getDerivedStateFromProps(props, current_state) {
        return {
            username: props.username,
            password: props.password
        }

    }

    componentDidUpdate(){
        console.log("Username: " + this.state.username + "/n Password: " + this.state.password)
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value })
    }


    render() {
        return (
            <form>
                <div className="form-control">
                    <label>Login:</label>
                    <input type="text" placeholder="login" value={this.state.username} onChange={this.handleChangeUsername} />
                </div>
                <div className="form-control">
                    <label>Hasło:</label>
                    <input type="password" placeholder="hasło" value={this.state.password} onChange={this.handleChangePassword} />
                </div>
                <button type="submit" id='T07-submit'>Zaloguj się</button>
            </form>
        )
    }
}
