import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


 const Users =({loading, users}) => {

        if(loading) {
          return  <Spinner />
        } else {
            
            return ( 
                <div style={userStyles} >
                    { users.map(user => {
                            return <UserItem key={user.id} user={user} />
                        })}
                </div>
            );
        }

}


Users.protoType = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}


const userStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px'
}

export default Users
