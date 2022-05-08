import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./components/sign-in/sign-in.component";

const Shop = () => {
  return (
    <h1>This is the shop</h1>
  )
}

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  )
  
}

export default App;
