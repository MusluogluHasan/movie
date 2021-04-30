import React, { Component } from 'react'

class AddUser extends Component {

    state = {
        email: '',
        psw: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-md-8 mb-4">

                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="email..." required onChange={this.handleChange} />
                    <input type="password" name="pwd" placeholder="password..." required onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
                
            </div>
        )
    }
}
export default AddUser;