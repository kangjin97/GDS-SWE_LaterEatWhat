import React from 'react'
import { Routes, Route } from 'react-router-dom';
import DeleteSuggestion from './pages/DeleteSuggestion';
import AddSuggestion from './pages/AddSuggestion';
import Home from './pages/Home';
import DeleteAllSuggestions from './pages/DeleteAllSuggestions';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/suggest/add' element={<AddSuggestion />} />
      <Route path='/suggest/delete/:id' element={<DeleteSuggestion />} />
      <Route path='/suggest/deleteall' element={<DeleteAllSuggestions />} />'
    </Routes>
  )
}

export default App