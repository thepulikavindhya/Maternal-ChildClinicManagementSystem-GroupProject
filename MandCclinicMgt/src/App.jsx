import { BrowserRouter,Routes,Route } from "react-router-dom";
 import Mother  from "./components/Mother";
import BForm from "./pages/BForm";
 import BabyDashboard from "./pages/BabyCart";
 import Home from "./pages/Home";
import BSelection from "./pages/BSelection";
import BVaccineForm from "./pages/BVaccineForm";
 import BirthForm from "./pages/BirthForm";
import MidwifeLogin from "./components/MidwifeLogin";
import Mselection from "./pages/Mselection";
import MForm from "./pages/MForm";
import MotherForm from "./pages/MotherForm";
import MVaccineForm from "./pages/MVaccineForm";
import Mreport from "./pages/Mreport";
import MotherCart from "./pages/MotherCart";
import Breport from "./pages/Breport";
import MidMForm from "./pages/MidMForm";
import MViewForm from "./pages/MViewForm";
import MotherBViewForm from "./pages/MotherBViewForm";




function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/midwife" element={<MidwifeLogin />} /> 
          <Route path = "/" element = {<Home /> } /> 
          <Route path = "/mother" element = {<Mother /> } />
         <Route path = "/bform" element = {<BForm/> } />
         <Route path = "/midmform" element = {<MidMForm/> } />
         <Route path = "/babycart" element = {<BabyDashboard/> } />
         <Route path = "/bselection" element = {<BSelection /> } />
         <Route path="/bvaccineform" element={<BVaccineForm/>}/>
         <Route path="/birthform" element={<BirthForm/>}/>
         <Route path = "/mselection" element = {<Mselection /> } />
         <Route path = "/mform" element = {<MForm /> } />
         <Route path = "/motherform" element = {<MotherForm /> } />
         <Route path="/mvaccineform" element={<MVaccineForm/>}/>
         <Route path="/mreport" element={<Mreport/>}/>
         <Route path="/breport" element={<Breport/>}/>
         <Route path = "/mothercart" element = {<MotherCart/> } />
         <Route path = "/mviewform" element = {<MViewForm/> } />
         <Route path = "/motherbviewform" element = {<MotherBViewForm/> } />
         
         
        
        


      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
