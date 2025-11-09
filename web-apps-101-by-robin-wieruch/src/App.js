import './App.css';
import * as Tasks from './tasks';

function App() {
  const ActiveTask = Tasks.TaskConditionalRenderingSwitch;
  return <ActiveTask />;
}

export default App;
