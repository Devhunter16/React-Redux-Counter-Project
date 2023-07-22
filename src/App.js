import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { useSelector } from 'react-redux';

function App() {

  const authStatus = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      { !authStatus && <Auth /> }
      { authStatus && <UserProfile /> }
      <Counter />
    </>
  );
};

export default App;
