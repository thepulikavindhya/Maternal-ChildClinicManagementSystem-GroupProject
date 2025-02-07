import { BrowserRouter,Routes,Route } from "react-router-dom";

import Mother  from "./components/Mother";

import BForm from "./pages/BForm";

import BabyDashboard from "./pages/BabyCart";

import Home from "./pages/Home";

import Selection from "./pages/Selection";
import VaccinationForm from "./pages/VaccineForm";
import BirthForm from "./pages/BirthForm";


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        
         {/* <Route path="/midwife" element={<MidwifeLogin />} /> */}
         <Route path = "/" element = {<Home /> } />
         <Route path = "/mother" element = {<Mother /> } />

         <Route path = "/bform" element = {<BForm/> } />
        
         <Route path = "/babycart" element = {<BabyDashboard/> } />

         <Route path = "/babycart" element = {<BabyDashboard/> } />
         <Route path = "/bform" element = {<BForm /> } />
         <Route path = "/selection" element = {<Selection /> } />
         <Route path="/vaccineform" element={<VaccinationForm/>}/>
         <Route path="/birthform" element={<BirthForm/>}/>
       


      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
