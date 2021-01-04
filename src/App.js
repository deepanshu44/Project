import {View,NavigationBar} from './Components/index.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider,connect } from 'react-redux'
import {createStore} from 'redux'

const Reducer=(state=0,action)=>{
  switch (action.type) {
    case 'ADD':
      return state+1;
      case 'DEL':
        return state-1;
    default:return state;

  }
}
//const Test=()=>{setTimeout(()=>{window.history.pushState('','','/123');window.history.go();},2000);return <div>refresh</div>;}
let store=createStore(Reducer)
// const actions={add:{type:"ADD"},del:{type:"DEL"}}
// const mapDispatch=()=>actions
// const mapState=(state)=>({value:state})
// const ConnectedComp=connect(mapState,mapDispatch)(Test)
function App() {

  return (<Provider store={store}><CssBaseline/><NavigationBar/>
    <div>helsslo</div>{console.log("value",store)}
     <div>hello</div>
      <div>helsslo</div><Test/>s
       <View/></Provider>
  );
}

export default App;
