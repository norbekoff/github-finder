import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: ''
    }
    static propType = {
        searchUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        clear: PropTypes.func.isRequired,
    }
    render() {

        const handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.text ==='') {
                this.props.setAlert('Please enter something', 'light')
            } else {
                this.setState({text: ''});
                this.props.searchUsers(this.state.text)
            }

        }   

        const handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value})
        }

       const {clear, showClear} = this.props
      
        return (

            <div>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" name="text" onChange={handleChange} value={this.state.text} placeholder='Search users'/>
                    <input type='submit' value='Search' className=" btn btn-block btn-dark " ></input>
                </form>
                {showClear && <button onClick={clear} className="btn btn-block btn-light">Clear</button>}
            </div>
        )
    }
}

export default Search
