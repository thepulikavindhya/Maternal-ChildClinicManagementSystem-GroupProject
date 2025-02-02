import { BrowserRouter,Routes,Route } from "react-router-dom";

import Mother  from "./components/Mother";
import BForm from "./pages/BForm";

import BabyDashboard from "./pages/BabyCart";

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        
         {/* <Route path="/midwife" element={<MidwifeLogin />} /> */}
         <Route path = "/mother" element = {<Mother /> } />
         <Route path = "/bform" element = {<BForm/> } />
        
         <Route path = "/babycart" element = {<BabyDashboard/> } />
         

      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
