import './assets/baseCSS.css';

import Card from './mini-projects/1.Card/Card.jsx';
import AddingCSSToJSX from './mini-projects/2.Adding CSS to JSX/Adding CSS to JSX.jsx';
import Student from './mini-projects/3.Props/Student.jsx';
import Conditions from './mini-projects/4.Conditions In React/Conditions.jsx';
import Render_lists from './mini-projects/5.Render_lists/Render_lists.jsx';

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
      <Render_lists />
    </>
  );
}

export default App
