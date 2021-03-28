import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Repos from '../repos/Repos'

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
  }

  render() {
    const {
      login,
      company, 
      avatar_url,
      name,
      location,
      bio,
      blog,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      created_at,
      hireable,
    } = this.props.user;

    const {loading, repos }= this.props
    if(loading) return <Spinner />
    
    return (
     <Fragment>
         <Link className='btn btn-light' to="/">Back to home</Link>
         Hirable: {hireable ? <i className="fas fa-check text-success"/> :  <i className="fas fa-times-circle text-danger" />}
         <div className="card grid-2">
             <div className="all-center">
                 <img className='round-img ' src={avatar_url} alt="" style={{width: '150px'}}/>
                 <h1>{name}</h1>
                 <p>Location: {location? location : 'unknown'}</p>
             </div>
            <div>
                {bio && <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </Fragment> }
                    <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                    <ul>
                        <li> {login && 
                            <Fragment>
                                <strong>Login: </strong> {login}
                            </Fragment>}
                        </li>
                        <li> {company && 
                            <Fragment>
                                <strong>Company: </strong> {company}
                            </Fragment>}
                        </li>
                        <li> {blog && 
                            <Fragment>
                                <strong>Website: </strong> {blog}
                            </Fragment>}
                        </li>
                        <li> {created_at && 
                            <Fragment>
                                <strong>Joined: </strong> {created_at.slice(0,4)}
                            </Fragment>}
                        </li>
                    </ul>
            </div>
         </div>
         <div className="card text-center">
             <div className="badge badge-primary">Followers: {followers}</div>
             <div className="badge badge-success">Following: {following}</div>
             <div className="badge badge-light">Public Repos: {public_repos}</div>
             <div className="badge badge-dark">Public Gist: {public_gists}</div>
         </div>

         <Repos repos={repos} />
     </Fragment>  
    );
  }
}
