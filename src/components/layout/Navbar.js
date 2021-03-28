import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'



const Navbar = (props) => {
    
      return (
            <div className='navbar bg-primary'>
                <h1> 
                    <i className={props.icon}/> {props.title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        )
}

// DEFAULT VALUES OF PROPS
Navbar.defaultProps = {
    icon: 'fab fa-github',
    title: 'Github finder'
}
// TYPE OF PROPS
Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}


export default Navbar
