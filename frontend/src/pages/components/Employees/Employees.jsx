import React, { Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import Styles from '../../../styles/Employees.module.scss'
import styles from '../../../styles/Table.module.scss'

const baseUrl = 'http://localhost:3001/employees'

const initialState = {
  employee: { name: '', phone: '', category: '', payment: '', frete: 0 },
  list: []
}

export default class Employees extends Component {

  state = {...initialState}
  
  componentWillMount(){ 
    axios(baseUrl).then(resp => {
      this.setState({list: resp.data})
    })
  }

  clear() {
    this.setState ({ employee: initialState.employee })
  }
  
  save() {
    const employee = this.state.employee
    const method = employee.id ? 'put' : 'post'
    const url = employee.id ? `${baseUrl}/${employee.id}` : baseUrl
    axios[method](url, employee)
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({employee: initialState.employee, list})
      })
  }

  load(employee){
    this.setState({ employee })
  }

  remove(employee){
    axios.delete(`${baseUrl}/${employee.id}`).then(resp => {
      const list = this.getUpdatedList(employee, false)
      this.setState({list})
    })
  }

  getUpdatedList(employee, add = true) {
    const list = this.state.list.filter(u => u.id !== employee.id)
    if(add)list.unshift(employee)
    return list
  }

  updateField(event) {
    const employee = {...this.state.employee}
    employee[event.target.name] = event.target.value
    this.setState({employee})
  }

  renderForm() {
    return (
      <div>
        <div className={Styles.name}>
          <label>Nome</label>
          <input type="name" 
            name="text" 
            value={this.state.employee.name}
            onChange = {e => this.updateField(e)}
            placeholder="digite o nome aqui:"
          />
        </div>
        <div className={Styles.rowTwo}>
        <div className={Styles.phone}>
          <label>Telefone</label>
          <input type="number" 
            name="phone" 
            value={this.state.employee.phone}
            onChange = {e => this.updateField(e)}
            placeholder="digite o telefone: "
          />
        </div>
        <div className={Styles.category}>
          <label>Categoria</label>
          <input type="text" 
            name="category" 
            value={this.state.employee.category}
            onChange = {e => this.updateField(e)}
            placeholder="digite a categoria aqui:"
          />
        </div>
        <div className={Styles.payment}>
          <label>Valor por frete</label>
          <input type="number" 
            name="payment" 
            value={this.state.employee.payment}
            onChange = {e => this.updateField(e)}
            placeholder="pagamento por frete:"
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
            <th>Nome</th>
            <th>Telefone</th>
            <th>Categoria</th>
            <th>Valor por frete</th>
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
    return this.state.list.map(employee => {
      return(
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.phone}</td>
          <td>{employee.category}</td>
          <td>{employee.payment}</td>
          <td>
            <button className={styles.salvar} onClick={() => this.load(employee)}>
              Editar
            </button>
            <button className={styles.cancelar} onClick={() => this.remove(employee)}>
              Exclui
            </button>
          </td>
        </tr>
      )
    })
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
            <h2>Lista de Funcionários</h2>
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