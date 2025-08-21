
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
import Child from './Compontent/Child';
import List from './Compontent/List';
import Hooks from './Compontent/Hooks';
import  Capp from './Compontent/Capp';
import Login from './Compontent/Signup/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/es6" element={<Es6 />} />
           <Route path="/child" element={< Child/>} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/list" element={< List/>} />
           <Route path="/hooks" element={< Hooks/>} />
           <Route path="/capp" element={<Capp/>} />
           <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
