import './App.css';
import { TodoList } from './components/TodoList';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <TodoList />
    </div>
    </RecoilRoot>
  );
}

export default App;
