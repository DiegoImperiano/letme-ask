import { BrowserRouter as Router, Route } from 'react-router-dom' // necessario para fazer a trasição entre as paginas

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
   <Router> 
    <Route path='/' component={Home}/>
    <Route path='/roons/new' component={NewRoom}/>
   </Router>
   );
}

export default App;
