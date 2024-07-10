import Card from './mini-projects/1.Card/Card.jsx';
import AddingCSSToJSX from './mini-projects/2.Adding CSS to JSX/Adding CSS to JSX.jsx';
import Props from './mini-projects/3.Props/Props.jsx';

function App() {
  return(
    <>
      <Card />
      <AddingCSSToJSX />
      <div>
        <Props name="Gangplank" age="42" isStudent={false} />
        <Props name="Sett" age="15" isStudent={true} />
      </div>
    </>
  );
}

export default App
