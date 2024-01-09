import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import First  from './components/FrontPages/FirstPage';
import CreateHealthInsurance from './components/HealthInsurance/createHealthInsurance';
import HealthInsurance from './components/HealthInsurance/HealthInsurance'
import UpdateHealthInsurance from './components/HealthInsurance/updateHealthInsurance';
import CreateLifeInsurance from './components/LifeInsurance/createlifeInsurance';
import LifeInsurance from './components/LifeInsurance/lifeInsurance'
import LifeUpdateInsurance from './components/LifeInsurance/updatelifeInsurance';
import AutoInsurance from './components/AutomobileInsurance/autoInsurance'
import CreateautoInsurance from './components/AutomobileInsurance/creatautoInurance'
import UpdateautoInsurance from './components/AutomobileInsurance/updateautoInsurance'
import ViewHealth from './components/ApplyForHealth/ViewHealthInsurance'
import Userhealthinsurance from './components/ApplyForHealth/userHealthForm'
import ViewAuto from './components/ApplyForAutoMobile/ViewAutoInsurance';
import Userautoinsurance from './components/ApplyForAutoMobile/userAutoForm';
import ViewLife from './components/ApplyForLife/ViewLifeInsurance';
import Userlifeinsurance from './components/ApplyForLife/userLifeForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import HealthUser from './components/AdminView/UserHealth'
import LifeUser from './components/AdminView/UserLife'
import AutoUser from './components/AdminView/UserAuto'
import AvailableLifeInsurance from './components/AdminView/AvailableLife'
import AvailableHealthInsurance from './components/AdminView/AvailableHealth'
import AvailableAutoInsurance from './components/AdminView/AvailableAuto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<First/>}></Route>
          <Route path='/health' element={<HealthInsurance />}> </Route>
          <Route path='/createhealthInsurance' element={<CreateHealthInsurance />}> </Route>
          <Route path='/updatehealthInsurance/:id' element={<UpdateHealthInsurance />}> </Route>
          <Route path='/lifeInsurance' element={<LifeInsurance />}> </Route>
          <Route path='/createlifeInsurance' element={<CreateLifeInsurance/>}> </Route>
          <Route path='/updatelifeInsurance/:id' element={<LifeUpdateInsurance />}> </Route>  
          <Route path='/autoInsurance' element={<AutoInsurance />}> </Route>
          <Route path='/createautoInsurance' element={<CreateautoInsurance/>}> </Route>
          <Route path='/updateautoInsurance/:id' element={<UpdateautoInsurance />}> </Route>          
          <Route path='/viewHealthInsurance' element={<ViewHealth />}> </Route>
          <Route path='/ApplyForHealth/:id' element={<Userhealthinsurance />}> </Route> 
          <Route path='/viewAutoInsurance' element={<ViewAuto />}> </Route>
          <Route path='/ApplyForAuto/:id' element={<Userautoinsurance />}> </Route> 
          <Route path='/viewLifeInsurance' element={<ViewLife />}> </Route>
          <Route path='/ApplyForLife/:id' element={<Userlifeinsurance />}> </Route>
          <Route path='/ViewHealthUsers' element={<HealthUser />}> </Route>
          <Route path='/ViewLifeUsers' element={<LifeUser />}> </Route>
          <Route path='/ViewAutoUsers' element={<AutoUser />}> </Route>
          <Route path='/ViewAvailableLife' element={<AvailableLifeInsurance />}> </Route>
          <Route path='/ViewAvailableHealth' element={<AvailableHealthInsurance />}> </Route>
          <Route path='/ViewAvailableAuto' element={<AvailableAutoInsurance />}> </Route>
        </Routes>
    </>
  )
}

export default App
