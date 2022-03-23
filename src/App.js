import './App.css';
import Clock from './components/firstOne';
import Welcome from './components/writing';
import Comp from './components/functionComp';
import Looop from './components/conditionalLoop';
import Appli from './components/context';
import store from './store';
import { Link,Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Clock/>
        <Welcome name={store.getState().name} colors={store.getState().colorCodes}/>
        <Comp/>
        <Looop type="cars" colors={store.getState().colorCodes}/>
        <Appli/>
        <Link to="/expenses">Expenses</Link>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
