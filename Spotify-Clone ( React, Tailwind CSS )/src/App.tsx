// import './App.css';
import LeftBar from './components/leftBar';
import Main from './components/main';
import ControlsContainer from './components/controls';

function App() {
  return (
    <div className="bg-black text-white font-semibold flex flex-col justify-between min-h-screen w-full">
      <div className="flex gap-4 px-4 py-2">
        <LeftBar />
        <Main />
      </div>
      <ControlsContainer />
    </div>
  );
}

export default App;
