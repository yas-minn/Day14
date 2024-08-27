import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import UserProfile from './Components/UserProfile/UserProfile';
import { createContext, useState , useEffect} from 'react';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  
  const [theme, setTheme] = useState('☀️');
 /* useEffect(() => {
    if (theme) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}, [theme]);*/

  function ChangeTheme(value){
    setTheme(value);
  }
  return (
    <ThemeContext.Provider value={{theme, ChangeTheme}}>
    <div id='Main'>
    <Navbar></Navbar>
    <SearchBar></SearchBar>
    <UserProfile></UserProfile>
    </div>
    </ThemeContext.Provider>

  );
}


export default App;
