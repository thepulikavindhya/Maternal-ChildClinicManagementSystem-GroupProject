import { BrowserRouter,Routes,Route } from "react-router-dom";
import MidwifeLogin from "./components/MidwifeLogin";
import Mother  from "./components/Mother";

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        
         {/* <Route path="/midwife" element={<MidwifeLogin />} /> */}
         <Route path = "/mother" element = {<Mother /> } />

      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
