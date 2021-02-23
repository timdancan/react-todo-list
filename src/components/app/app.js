import React, { Component } from "react";
import AppHeader from "../app-header/app-header"
import TodoList from "../todo-list/todo-list"
import SearchPanel from "../search-panel/search-panel"
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import AppButton from '../item-add-form/item-add-from'

import './app.css'

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Cofee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ],
    term: '',
    filter: 'all'
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData})=> {
      const idx = todoData.findIndex(el => el.id === id)

      const newArrey = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)]
      return {
        todoData: newArrey
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoData})=> {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr
      }
    })
  }

  onToggleProrerty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id)
    const oldArret = arr[idx]
    const newItem = {...oldArret, [propName]: !oldArret[propName]}
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({todoData})=> {
      return {
        todoData: this.onToggleProrerty(todoData, id, 'important')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({todoData})=> {
      return {
        todoData: this.onToggleProrerty(todoData, id, 'done')
      }
    })
  }

  onSearchChange = (term) => {
    this.setState({term})
  }
  onFilterChange = (filter) => {
    this.setState({filter})
  }

  search (items, term) {
    if(term.length === 0) {
      return items
    }
    return items.filter((item)=> {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  filter (items, filter) {
    switch (filter) {
      case 'all': 
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  render () {
    const { todoData, term, filter } = this.state

    const visiable = this.filter(this.search(todoData, term), filter)
    const doneCounter = todoData.filter(el => el.done).length

    const todoCounter = todoData.length - doneCounter

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCounter} done={doneCounter} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter 
          filter={filter}
          onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList todos={ visiable }
        onDeleted={this.deleteItem}
        onToggleImportant = {this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
        />
        <AppButton onItemAdded={this.addItem}/>
      </div>
      )
  }
}