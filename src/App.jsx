import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home'
import SignIn from './routes/sign-in/sign-in'
import Navigation from './components/navigation/navigation.component'

import './index.scss'

const Shop = () => {
  return <div>SHOP</div>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App