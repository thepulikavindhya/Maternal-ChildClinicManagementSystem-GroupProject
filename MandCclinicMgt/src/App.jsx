import { BrowserRouter,Routes,Route } from "react-router-dom";
import MidwifeLogin from "./components/MidwifeLogin";
import Mother  from "./components/Mother";
import Home from "./pages/Home";
import BabyDashboard from "./pages/BabyCart";
import BForm from "./pages/BForm";
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
