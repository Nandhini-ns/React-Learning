
// import './App.css';
// import Es6 from './Compontent/Es6';

// function App() {
//   return (
//     <div className="App">
//     <Es6/>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Es6 from './Compontent/Es6';
import { Children } from 'react';
import Child from './Compontent/Child';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/es6" element={<Es6 />} />
           <Route path="/child" element={< Child/>} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
