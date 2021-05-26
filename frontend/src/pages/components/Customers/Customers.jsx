import React, { Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import Styles from '../../../styles/Customers.module.scss'
import styles from '../../../styles/Table.module.scss'

const baseUrl = 'http://localhost:3001/customers'

const initialState = {
  customer: { name: '', phone: '', address: '', district: ''},
  list: []
}

export default class Customers extends Component {

  state = {...initialState}
  
  componentWillMount(){ 
    axios(baseUrl).then(resp => {
      this.setState({list: resp.data})
    })
  }

  clear() {
    this.setState ({ customer: initialState.customer })
  }
  
  save() {
    const customer = this.state.customer
    const method = customer.id ? 'put' : 'post'
    const url = customer.id ? `${baseUrl}/${customer.id}` : baseUrl
    axios[method](url, customer)
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({customer: initialState.customer, list})
      })
  }

  load(customer){
    this.setState({ customer })
  }

  remove(customer){
    axios.delete(`${baseUrl}/${customer.id}`).then(resp => {
      const list = this.getUpdatedList(customer, false)
      this.setState({list})
    })
  }

  getUpdatedList(customer, add = true) {
    const list = this.state.list.filter(u => u.id !== customer.id)
    if(add)list.unshift(customer)
    return list
  }

  updateField(event) {
    const customer = {...this.state.customer}
    customer[event.target.name] = event.target.value
    this.setState({customer})
  }

  renderForm() {
    return (
      <div>
        <div className={Styles.name}>
          <label>Nome</label>
          <input type="name" 
            name="name" 
            value={this.state.customer.name}
            onChange = {e => this.updateField(e)}
            placeholder="digite o nome aqui:"
          />
        </div>
        <div className={Styles.rowTwo}>
        <div className={Styles.phone}>
          <label>Telefone</label>
          <input type="number" 
            name="phone" 
            value={this.state.customer.phone}
            onChange = {e => this.updateField(e)}
            placeholder="digite o telefone: "
          />
        </div>
        <div className={Styles.address}>
          <label>Endereço</label>
          <input type="text" 
            name="category" 
            value={this.state.customer.address}
            onChange = {e => this.updateField(e)}
            placeholder="digite o endereço aqui:"
          />
        </div>
        <div className={Styles.district}>
          <label>Bairro</label>
          <input type="text" 
            name="district" 
            value={this.state.customer.district}
            onChange = {e => this.updateField(e)}
            placeholder="digite o endereço aqui:"
          />
        </div>
        </div>
        <div>
          <div >
            <button className={Styles.save} onClick={e => this.save(e)}>Salvar</button>
            <button className={Styles.cancel} onClick={e => this.clear(e)}>Cancelar</button>
          </div>
        </div>
      </div>
    )
  }

  renderTable(){
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th style={{width:'13.75rem'}} >Nome</th>
            <th>Telefone</th>
            <th style={{width:'25rem'}}>Endereço</th>
            <th style={{width:'13.75rem'}}>Bairro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
            {this.renderRows()}
        </tbody>
      </table>
    )
  }
  
  renderRows() {
    return this.state.list.map(customer => {
      return(
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>{customer.name}</td>
          <td>{customer.phone}</td>
          <td>{customer.address}</td>
          <td>{customer.district}</td>
          <td>
            <button className={styles.salvar} onClick={() => this.load(customer)}>
              Editar
            </button>
          </td>
        </tr>
      )
    })
  }

  renderSearch() {
    return (
      <div>
      <div className={Styles.iconSearch}>
        <input type="name" 
          name="name" 
          value={this.state.customer.name}
          onChange = {e => this.updateField(e)}
          placeholder="pesquise o bairro aqui:"
        />
        <button  ><img src="/search.png" alt="" /></button>
      </div>
    </div>
    )
  }

  render() {
    return (
     <React.Fragment>
      <Main >
        <div className={Styles.content}>
          <div className={Styles.form}>
            <h2>Adicionar ou Alterar</h2>
            {this.renderForm()}
          </div>
          <div className={Styles.search}>
            <div>
                {this.renderSearch()}
            </div>   
          </div>
          <h2>Lista de Clientes</h2>
          <div className={Styles.list}>
            <div className={styles.table}>
              {this.renderTable()}
            </div>
          </div>
        </div>  
      </Main>
     </React.Fragment>
    )
    }
}