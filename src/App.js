import logo from './logo.svg';
import './App.css';
import MyPersonalPage from './MyPersonalPage';

function App() {

const myInfo = {
  name: "Anton",
  surname: "Vladimirovich",
  lastname: "Belukha",
  phone: "+380974572106",
  gmail: "forsakenanton@gmail.com",
  city: "Krivoy Rog",
  workExperience: "12 years",
  skills: [
    "skill one",
    "skill two",
    "skill three",
  ],
  photo: "./Cat.jpg"
}

  return (
    <div className="App">
      <h2>My personal page</h2>
      <MyPersonalPage myInfo={myInfo}></MyPersonalPage>
    </div>
  );
}

export default App;
