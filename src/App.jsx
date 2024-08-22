import './App.css';
import Landingpage from './stores/page/Landingpage'; 
import { Routes,Route } from 'react-router-dom';
import Mobilepage from './stores/page/Mobilepage';
import Acpage from './stores/page/Acpage';
import Computerspage from './stores/page/Computerspage';
import Fridgepage from './stores/page/Fridgepage';
import Kitchenpage from './stores/page/Kitchenpage';
import Menpage from './stores/page/Menpage';
import Watchpage from './stores/page/Watchpage';
import Womenpage from './stores/page/Womenpage';
import Bookspage from './stores/page/Bookspage';
import Mobilesingle from './stores/single/Mobilesingle';
const App = () => {
  return (
    <>
   
    
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/ac' element={<Acpage/>}/>
        <Route path='/mobile' element={<Mobilepage/>}/>
        <Route path='/computer' element={<Computerspage/>}/>
        <Route path='/fridge' element={<Fridgepage/>}/>
        <Route path='/kitchen' element={<Kitchenpage/>}/>
        <Route path='/men' element={<Menpage/>}/>
        <Route path='/watch' element={<Watchpage/>}/>
        <Route path='/women' element={<Womenpage/>}/>
        <Route path='/book' element={<Bookspage/>}/>
        <Route path='/mobile/:id' element={<Mobilesingle/>}/>
        <Route path='/ac/:id' element={<Mobilesingle/>}/>
        <Route path='/book/:id' element={<Mobilesingle/>}/>
        <Route path='/fridge/:id' element={<Mobilesingle/>}/>
        <Route path='/kitchen/:id' element={<Mobilesingle/>}/>
        <Route path='/men/:id' element={<Mobilesingle/>}/>
        <Route path='/watch/:id' element={<Mobilesingle/>}/>
        <Route path='/women/:id' element={<Mobilesingle/>}/>
        <Route path='/watch/:id' element={<Mobilesingle/>}/>
        
        

       
      </Routes>
    
    </>
  )
}

export default App;