import { useState, useEffect } from 'react'
import * as C from './App.styles'
import {Item} from './types/Item'
import {categories} from './data/categories'
import {items} from './data/items'
import { filterListByMonth, getCurrentMonth } from './helpers/dataFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { AddArea } from './components/AddArea'



const App = () =>{
  
  const [list, setList] = useState(items)
  const [filterlist, setFilterList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const BASE_URL = 'http://localhost:5000'

  async function listarRegistros() {
    const response = await fetch(`${BASE_URL}/listar`)
    const registros = await response.json()
    setList(registros)    
  }

  function compare(a:Item,b:Item) {
    if (a.date < b.date)
       return -1;
    if (a.date > b.date)
      return 1;
    return 0;
  }
   

  useEffect(()=>{
    setFilterList(filterListByMonth( list.sort(compare),currentMonth))
  },[list,currentMonth])
  
  const changeMonth = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  }
  
  useEffect(()=>{
    let enter = 0
    let exit = 0

    for (const i in filterlist) {
      if(categories[filterlist[i].category].expense){
        exit+=filterlist[i].value
      }else{
        enter+=filterlist[i].value
      }
    }
    setIncome(enter)
    setExpense(-exit)
  },[filterlist])
  
  const newList = async (newItem: Item)=>{
    const requestConfig = {
      method: "POST",
      body: JSON.stringify(newItem),
      headers:{
        "Content-Type": "application/json",
    },
    };
    await fetch(`${BASE_URL}/cadastrar`, requestConfig)
  }

  useEffect(()=>{
    listarRegistros()
  },[newList])

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea currentMonth = {currentMonth} changeM = {changeMonth} list={filterlist} income= {income} expense = {expense}/>
        <AddArea add = {newList} indexList = {list.length}/>
        <TableArea list={filterlist}/>

      </C.Body>
    </C.Container>
  )
}

export default App