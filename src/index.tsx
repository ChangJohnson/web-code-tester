import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {
  return (
    <div>
      {/* <CodeCell /> */}
      <TextEditor />
    </div>
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
