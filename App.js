import "./App.css";
import Login from "./Login";
import Register  from "./register"
import { Route } from "react-router-dom";

import home from "./home";
function App() {
  const auth = localStorage.getItem("token");
  return (
    
    <div className="App col-12">
      <>
        <div>
    
          {auth ?
           <Route path="/home" component={home} />
           :
           <>
            <Route path="/" component={Login} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register}/>   
          </>
           } 
                
        </div>
      </>
    </div>
  );
}

export default App;