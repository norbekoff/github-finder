import { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/users/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User'

class App extends Component {
  state = {
    repos: [],
    user: {},
    users: [],
    loading: false,
    alert: null,
  };
  //  async componentDidMount() {

  //    this.setState({loading: true})
  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.ID}6client_secret=${process.env.SECRET}`);
  //     this.setState({users: res.data, loading: false})
  //   }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      //get your id and secret from github tokens
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.ID}6client_secret=${process.env.SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (username) =>{
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.ID}6client_secret=${process.env.SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  }

  getRepos = async (username) =>{
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.ID}&client_secret=${process.env.SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
    
  }

  clear = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    const { users, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search
                      setAlert={this.setAlert}
                      searchUsers={this.searchUsers}
                      clear={this.clear}
                      showClear={users.length > 0 ? true : false}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />

              <Route path="/about" component={About} />
              <Route exact path="/user/:login" render={(props)=> (
               <User {...props} repos={this.state.repos} getRepos={this.getRepos} getUser={this.getUser} user={this.state.user} loading={this.state.loading} />
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
