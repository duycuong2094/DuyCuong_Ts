import { Route, Routes } from 'react-router-dom'
import './App.css'
import Details from './components/Details'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/details' element={ <Details/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
