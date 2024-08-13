import './assets/baseCSS.css';

// import Snnipet from './mini-projects/snnipet.jsx';

import Card from './mini-projects/1.Card/Card.jsx';
import AddingCSSToJSX from './mini-projects/2.Adding CSS to JSX/Adding CSS to JSX.jsx';
import Student from './mini-projects/3.Props/Student.jsx';
import Conditions from './mini-projects/4.Conditions In React/Conditions.jsx';
import Render_Lists from './mini-projects/5.Render_Lists/Render_Lists.jsx';
import Click_Events from './mini-projects/6.Click_Events/Click_Events.jsx';
import Counter from './mini-projects/7.Counter/Counter.jsx';
import OnChangeEvent from './mini-projects/8.OnChangeEvent/OnChangeEvent.jsx';
import ColorPicker from './mini-projects/9.ColorPicker/ColorPicker.jsx';
import UpdaterFunctions from './mini-projects/10.UpdaterFunctions/UpdaterFunctions.jsx';
import UpdateObjsInState from './mini-projects/11.UpdateObjsInState/UpdateObjsInState.jsx';
import MainUpdateArraysInState from './mini-projects/12.UpdateArraysInState/MainUpdateArraysInState.jsx';
import ToDoListApp from './mini-projects/13.ToDoListApp/ToDoListApp.jsx';
import MainUseEffectHook from './mini-projects/14.UseEffectHook/MainUseEffectHook.jsx';
import DigitalClockApp from './mini-projects/15.DigitalClockApp/DigitalClockApp.jsx';
import UseContextHook from './mini-projects/16.UseContextHook/UseContextHook.jsx';
import UseRefHook from './mini-projects/17.UseRefHook/UseRefHook.jsx';
import Stopwatch from './mini-projects/18.Stopwatch/Stopwatch.jsx';

function App(){
  return(
    <>
      <div >{/*1*/}
        <h1 className="line">1.First try with React</h1>
        <div className='flex-space-around'>
          <Card />
          <ol start="2">
            <li><a href="#a2">Adding CSS to JSX methods</a></li>
            <li><a href="#a3">Properties</a></li>
            <li><a href="#a4">Conditions</a></li>
            <li><a href="#a5">Lists</a></li>
            <li><a href="#a6">Click events</a></li>
            <li><a href="#a7">Counter // useState() hook</a></li>
            <li><a href="#a8">onChange event handler</a></li>
            <li><a href="#a9">Color Picker // useState</a></li>
            <li><a href="#a10">Updater Functions</a></li>
            <li><a href="#a11">Update objects in state</a></li>
            <li><a href="#a12">Update arrays in state</a></li>
            <li><a href="#a13">'A bunch of array concepts'</a></li>
            <li><a href="#a14">useEffect() hook</a></li>
            <li><a href="#a15">Digital Clock App</a></li>
            <li><a href="#a16">useContext() hook</a></li>
            <li><a href="#a17">useRef() hook</a></li>
            <li><a href="#a18">Stopwatch</a></li>
          </ol>
        </div>
      </div>
      <AddingCSSToJSX id="a2"/> {/*2*/}
      <div id="a3"> {/* Properties */} {/*3*/}
        <h1 className="line">Properties</h1>
        <div className="flex-wrap flex-space-around">
          <Student name="Gangplank" age={42} isStudent={false} />
          <Student name="Sett" age={15} isStudent={true} />
          <Student />
        </div>
      </div>
      <Conditions isLoggedIn={true} name="Greque" id="a4"/> {/*4*/}
      <Render_Lists id="a5"/> {/*5*/}
      <Click_Events id="a6"/> {/*6*/}
      <Counter id="a7"/> {/*7*/}
      <OnChangeEvent id="a8"/> {/*8*/}
      <ColorPicker id="a9"/> {/*9*/}
      <UpdaterFunctions id="a10"/> {/*10*/}
      <UpdateObjsInState id="a11"/> {/*11*/}
      <MainUpdateArraysInState id="a12"/> {/* Go deep about it */} {/*12*/}
      <ToDoListApp id="a13"/> {/*13*/}
      <MainUseEffectHook id="a14"/> {/*14*/}
      <DigitalClockApp id="a15"/> {/*15*/}
      <UseContextHook id="a16"/> {/*16*/}
      <UseRefHook id="a17"/> {/*17*/}
      <div id="a18"> {/*18*/}
        <h1 className="line">Stopwatch</h1>
        <Stopwatch />
        <Stopwatch />
        <Stopwatch />
      </div>
    </>
  );
}

export default App
