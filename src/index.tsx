import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CodeCell /> */}
        <TextEditor />
      </div>
    </Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

// import ReactDOM from 'react-dom';

// const App = () => {
//   return <h1>hi</h1>;
// };

// ReactDOM.render(<App />, document.getElementById('root'));
