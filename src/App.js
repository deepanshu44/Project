import {View,NavigationBar,SuccessPop} from './Components/index.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider,connect } from 'react-redux'
import {createStore} from 'redux'

const Reducer=(state={value:0,pop:false},action)=>{
  switch (action.type) {
    case 'ADD':
      return {...state,value:state.value+1};
      case 'DEL':
        return {...state,value:state.value-1};
      case 'POP':
      return {...state,pop:!state.pop}
    default:return state;

  }
}
//const Test=()=>{setTimeout(()=>{window.history.pushState('','','/123');window.history.go();},2000);return <div>refresh</div>;}
let store=createStore(Reducer)
const actions={add:{type:"ADD"},del:{type:"DEL"},pop:{type:"POP"}}
const mapDispatch=()=>actions
const mapState=(state)=>({value:state.pop})
const ConnectedComp=connect(mapState,mapDispatch)(SuccessPop)
function App() {

  return (<Provider store={store}><CssBaseline/><NavigationBar/>
    <div>helsslo</div>{console.log("value",store)}
     <div>hello</div>
      <div>helsslo</div><ConnectedComp/>s
       <View/></Provider>
  );
}

export default App;
