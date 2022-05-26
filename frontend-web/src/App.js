import { Routes, Route } from 'react-router-dom';

// Layout and styles
import GlobalStyle from './styles/global';
import Navbar from './layout/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About'
import { Confirmation } from './pages/Confirmation';
import { Aulas } from './pages/Aulas';
// import { FeaturedAula } from './components/FeaturedAula';
import { NovaAula } from './components/NovaAula';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Turmas } from './pages/Turmas';
import { DetalheTurma } from './components/DetalheTurma';

import { NotFound } from './pages/ErrorNotFound';

import { RequireAuth } from './components/RequireAuth';
import { AuthProvider } from './utils/auth';

// UPGRADE: Lazy loading (?)

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="about" element={ <About />} />
        <Route path='login' element={ <Login /> }/>
        <Route path='profile' element={ 
        <RequireAuth>
          <Profile />
        </RequireAuth>
         }/>
        <Route path="aula" element={ 
          <RequireAuth>
          <Aulas />
        </RequireAuth>
        } >
          <Route path='novo' element={ <NovaAula />} />
        </Route>
        <Route path="turmas" element={ 
          <RequireAuth>
          <Turmas />
        </RequireAuth>
        } >
          <Route path=':turmaId' element= { <DetalheTurma /> } />
        </Route>
        <Route path="upload-ok" element={ <Confirmation/>}/>
        <Route path="*" element={ <NotFound/> }/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
