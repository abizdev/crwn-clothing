import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import './index.scss'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      
    </Routes>
  )
}

export default App