import QuoteAdder from './quoteAdder';
import Homepage from './homepage'
import SearchAuthor from './searchAuthor'

import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom'


function App() {
  


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element ={<Homepage/>} />
        <Route path='/addquote' element={<QuoteAdder/>} />
        <Route path='/search' element={<SearchAuthor/>} />

      </Routes>
      <p className='center sign'>Created by @egbonjefri for CodeCademy</p>
    </div>
  );
}

export default App;
