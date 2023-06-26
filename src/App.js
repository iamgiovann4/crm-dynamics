import Router from './Router'
import Initialization from './components/Initialization'
import useAuthStore from './store/authStore';

function App() {

  const isLoading = useAuthStore((state) => state.isLoading)

  return isLoading ? <Initialization/> : <Router />

}

export default App;
