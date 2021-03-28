import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const UserItem = ({user: {login, html_url, avatar_url}}) => {
  
      
        return (
            <div className='card text-center'>
                <img src={avatar_url}
                 alt=""
                 className='round-img'
                 style={{
                     width: '60px'
                 }}
                />
                <h3>{login}</h3>
                <Link to={`/user/${login}`} 
                className='btn btn-dark btn-sm my-1'
                >More</Link>
            </div>
        )
    
}

UserItem.prototype = {
    user: PropTypes.object.isRequired,
}

export default UserItem
