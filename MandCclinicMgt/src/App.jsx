import { BrowserRouter,Routes,Route } from "react-router-dom";

import Mother  from "./components/Mother";
import BForm from "./pages/BForm";
import Selection2 from "./pages/Selection";
import BabyDashboard from "./pages/BabyCart";

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        
         {/* <Route path="/midwife" element={<MidwifeLogin />} /> */}
         <Route path = "/mother" element = {<Mother /> } />
         <Route path = "/bform" element = {<BForm/> } />
         <Route path = "/selection2" element = {<Selection2/> } />
         <Route path = "/babycart" element = {<BabyDashboard/> } />
         

      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
