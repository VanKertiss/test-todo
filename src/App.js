import HS from './app.module.css';
import Input from './components/Input'
import List from './components/List';

const App = () => {
  return (
    <div className={HS.container}>
      <h1 >Todo list with tags</h1>
      <Input />
      <List />
    </div>
  );
}

export default App;
