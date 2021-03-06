import { createContext, useContext } from "react";
import store from '../store';

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
const ThemeContext = createContext(themes);

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
        <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
            </button>
            <h1 style={{color:store.getState().color}}>Paint Me</h1>
        </div>
    );
}

export default App;