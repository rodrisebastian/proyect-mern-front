import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TasksPage from './pages/TasksPage'
import TasksFormPage from './pages/TasksFormPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './pages/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/login' element = {<LoginPage/>}/>
          <Route path='/register' element = {<RegisterPage/>}/>

        <Route element = {<ProtectedRoute/>}>
          <Route path='/tasks' element = {<TasksPage/>}/>
          <Route path='/add-tasks' element = {<TasksFormPage/>}/>
          <Route path='/tasks/:id' element = {<TasksFormPage/>}/>
          <Route path='/profile' element = {<ProfilePage/>}/>
        </Route>
        </Routes>
      </BrowserRouter>  
    </AuthProvider>
  );
}

export default App