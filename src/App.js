
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useStateValue } from './Stateprovider';

function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="App">
      {!user ? (<Login/>) : (
        <><Header /><div className='app_body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div></>
       
      
      )}
      </div>
   
  );
}

export default App;
