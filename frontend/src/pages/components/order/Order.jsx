import React, { Component} from 'react'
import axios from 'axios'

import Main from '../template/Main'


const baseUrl = 'http://localhost:3001/users'

const initialState = {
  user: { name: '', email: '' },
  list: []
}


// eslint-disable-next-line
export default class Order extends Component {

  state = {...initialState}
  
  clear() {
    this.setState ({ user: initialState.user })
  }
  
  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(resp =>{
        const list = this.getUpdatedList(resp.data)
        this.setState({user: initialState.user, list})
      })
  }

  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    return list
  }

  render() {
    return (
      <Main > 
          Pedidos
      </Main>
      )
    }
}