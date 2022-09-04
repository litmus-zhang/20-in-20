import logo from './logo.svg';
import './App.css';
import Forminput from './components/Forminput';
import Avatar from './components/Avatar';
import Button from './components/Button';
import {FORM_INPUT} from './constants'
import CheckBox from './components/checkBox';



function App() {
  return (
    <div className="App">
      <form className='Form-Container'>
        <Avatar />
        <h1>Design Tokens and Components</h1>
        <div className='input-container'>
          {FORM_INPUT.map((input, index) => (
            <Forminput key={index} {...input} />
          ))}
        </div>
        <CheckBox />
      <Button text={"Signup"}/>

      </form>
    </div>
  );
}

export default App;
