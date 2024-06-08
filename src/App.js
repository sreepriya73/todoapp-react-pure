import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './component/AddTodo';
import SearchTodo from './component/SearchTodo';
import DeleteTodo from './component/DeleteTodo';
import ViewTodo from './component/ViewTodo';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddTodo/>}/>
    <Route path='/search' element={<SearchTodo/>}/>
    <Route path='/delete' element={<DeleteTodo/>}/>
    <Route path='/view' element={<ViewTodo/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
