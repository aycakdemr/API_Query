import './App.css';
import ApiService from './services/apiService';

function App() {
 
  let apiService = new ApiService();
   
  console.log(apiService.getApi())
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
