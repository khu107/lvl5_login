import './App.css';
import store from './redux/configStore/store';
import Router from './shared/Router';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
