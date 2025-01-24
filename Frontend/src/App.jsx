import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import appStore from "./utils/appStore";
import Home from "./pages/Home";
import UserProtectWrapper from "./components/UserProtectWrapper";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./components/CaptainProtectWrapper";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <Provider store={appStore}>
    <Routes>
      <Route path="/start" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />


     
      <Route path="/home" element={ 
        <UserProtectWrapper>
          <Home />
        </UserProtectWrapper>
       
        } />

      <Route path="/captain-home" element={ 
        <CaptainProtectWrapper>
          <CaptainHome/>
        </CaptainProtectWrapper>
       
        } />
    
      <Route path="/captain-riding" element={ 
        <CaptainProtectWrapper>
          <CaptainRiding/>
        </CaptainProtectWrapper>
       
        } />
    

    </Routes>
    </Provider>
  );
};

export default App;
