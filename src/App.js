import React, { Component } from 'react'
import NavBar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import './App.css'

class App extends Component {
   state = {
      users: [],
      loading: false,
   }

   async componentDidMount() {
      //  this is a life cycle method
      //  this will run when the component runs
      this.setState({ loading: true })
      const res = await axios.get(
         `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      this.setState({
         users: res.data,
         loading: false,
      })
   }

   // Search Github users
   searchUsers = async text => {
      // this.setState({ loading: true })
      const res = await axios.get(
         `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )

      this.setState({
         users: res.data.items,
         loading: false,
      })
      console.log(text + ' from App.js')
   }

   render() {
      return (
         <div className='App'>
            <NavBar />
            <div className='container'>
               <Search searchUsers={this.searchUsers} />
               <Users loading={this.state.loading} users={this.state.users} />
            </div>
         </div>
      )
   }
}

export default App
