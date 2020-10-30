import logo from './logo.svg';
import './App.css';
import UploadForm from './FileUpload';
import Home from './Home';
import Navigator from './NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigator />
      <Switch>
      <Route path='/batchProcessing' component= {UploadForm}></Route>
      <Route path='/' component= {Home}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
