import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({repo}) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
            <span style={{color: 'rgb(50.2%,50.2%,50.2%)', fontSize: '0.9rem'}}>{repo.description}</span>
        </div>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default Repo
