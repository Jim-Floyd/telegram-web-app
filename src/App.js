import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';


const {getData} = require("./db/db");
const foods = getData();

function App() {
  
  return (
    <>
      <Button title={'Add'} disable={false} type={"add"}/>
      <Button title={'Checkout'} disable={false} type={"checkout"}/>
      <Button title={'Remove'} disable={false} type={"remove"}/>
      {foods.map(ac => {
        return <Card ac={ac} key={ac.id}/>;
      })}
    </>
  );
}

export default App;
