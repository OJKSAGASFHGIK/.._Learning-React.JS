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

function App() {
  return(
    <>
      <Card />
      <AddingCSSToJSX />
      {/* Properties */}
      <div>
        <div className="line">Properties</div>
        <div className="flex-wrap flex-space-around">
          <Student name="Gangplank" age={42} isStudent={false} />
          <Student name="Sett" age={15} isStudent={true} />
          <Student />
        </div>
      </div>
      <Conditions isLoggedIn={true} name="Greque" />
      <Render_Lists />
      <Click_Events />
      <Counter />
      <OnChangeEvent />
      <ColorPicker />
      <UpdaterFunctions />
      <UpdateObjsInState />
    </>
  );
}

export default App
