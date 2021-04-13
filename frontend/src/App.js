import { Login } from './components/Login'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { Signup } from './components/Signup'
import './App.css';

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

function App() {
  return (
    <div className="App">
      <Header />
      {currentUser() ? 
        <Home /> : 
        <><Login /> <Signup /></>}
    </div>
  );
}

export default App;
