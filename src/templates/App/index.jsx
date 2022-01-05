import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/ExempleProvider';
import { PostsProvider } from '../../contexts/PostsProvider';
import './index.css';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div className="App">
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
