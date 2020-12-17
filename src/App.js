import Component from './Components/index.jsx';
import AppBar from './Components/AppBar/AppBar.jsx'
import './scss/App.scss';

function App() {
  return (<><AppBar/><Component/></>
  );
}

export default App;

// document.addEventListener('scroll',(e)=>{
//   if(a.getBoundingClientRect().top===0){
//     console.log("zero")};
//     console.log(Math.trunc(Math.log(a.getBoundingClientRect().top)),
//     Math.trunc(Math.log(a.getBoundingClientRect().bottom)))
//   })
