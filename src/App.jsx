import { useContext , createContext , useState } from 'react'
import './App.css'

const lang = [
  ["Tema utilizado", "Idioma", "Trocar tema", "Trocar linguagem: Português", "Trocar linguagem: Inglês"],
  ["Theme used", "Language", "Change theme", "Change language: Portuguese", "Change language: English"],
]

const PreferencesContext = createContext();

function App() {

  const [preferences, setPreferences] = useState({theme: 'light', language:'pt'});
  const [languages, setLanguages] = useState(lang[0]);

  const toggleTheme = () => {
    setPreferences(currentTheme => ({...currentTheme, theme: currentTheme.theme === 'light' ? 'dark' : 'light'}));
  }

  const changeLanguage = (language) => {
    setPreferences(currentLanguage => ({
      ...currentLanguage,
      language: language
    }));
  }

  return (
    <>
      <PreferencesContext.Provider value={{preferences, toggleTheme, changeLanguage, languages}}>
        <div className='box'>
          <div className='tool'>
            <Toolbar/>
          </div>
          <div className='buton'>
            <button onClick={toggleTheme}>{languages[2]}</button>
            <button onClick={() => {changeLanguage('PT-br'); setLanguages(lang[0])}}>{languages[3]}</button>
            <button onClick={() => {changeLanguage('EN'); setLanguages(lang[1])}}>{languages[4]}</button>
          </div>
        </div>
      </PreferencesContext.Provider>
    </>
  )
}

function Toolbar() {
  const { preferences , languages} = useContext(PreferencesContext);

  return (
    <div style={{background: preferences.theme === 'dark' ? 'black' : 'grey', color: preferences.theme === 'dark' ? 'gray' : 'black'}}>
      <p>{languages[0]} - {preferences.theme}</p>
      <p>{languages[1]}- {preferences.language}</p>
    </div>
  );
}

export default App
