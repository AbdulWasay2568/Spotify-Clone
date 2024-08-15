import './App.css'
import LeftBar from './components/leftBar'
import Main from './components/main'
import ControlsContainer from './components/controls'

function App() {

  return (
    <div className='Container'>
      <div className='backGround'>
        <LeftBar/>
        <Main/>
      </div>
      <ControlsContainer/>
    </div>
  )
}

export default App
