import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Toolbar from './Toolbar';  
import Quiz from './quiz';  

function App() {
  return (
    <Router>
      <div>
        <Toolbar />
        <Routes>
           <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}
 

export default App;
