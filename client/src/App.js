import { Route, Routes } from "react-router-dom";
import MyImages from "./Components/MyImages";
import Navbar from "./Components/Navbar";

import Uploder from "./Components/Uploder";

function App() {
  return (
    <Routes>

      <Route 
        
        path="/upload"
        element={[<Navbar key={'nav'}/>, <Uploder key={"uploader"} />]}>

      </Route>

      <Route 
        
        path="/myimages"
        element={[<Navbar key={'nav'}/>, <MyImages key={"images"} />]}>

      </Route>
    </Routes>
  );
}

export default App;
