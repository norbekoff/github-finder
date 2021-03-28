import React from 'react'
import PropTypes from 'prop-types';
import Repo from './Repo'

function Repos({repos}) {
return  repos.map(repo => <Repo key={repo.id} repo={repo} />)
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos
