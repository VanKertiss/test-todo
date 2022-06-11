import HS from './app.module.css';
import Input from './components/Input/Input'
import List from './components/List/List';
import Tags from './components/Tags/Tags';
import { Provider } from 'react-redux';


import { store } from './store/store';

const App = () => {
  return (
    <Provider store={ store }>
    <div className={HS.container}>
      <header>
        <h1 >Todo list with tags</h1>
        <div className={HS.logoImg} alt='logo'></div>
      </header>      
      <Input />
      <Tags />
      <List />
    </div>
    </Provider>
  );
}

export default App;
