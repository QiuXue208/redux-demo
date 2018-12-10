const reducer = (state,action)=>{
    if(state === undefined){
        return 0
    }else{
        if(action.type === 'add'){
            return state + action.payload
        }else{
            return state
        }
    }
}
const store = Redux.createStore(reducer)
function render(){
    let app = document.querySelector('#app')
    app.innerHTML = `
      <div>
        value:<span>${store.getState()}</span>
        <div>
          <button onclick="add1()">+1</button>
          <button onclick="add2()">+2</button>
          <button onclick="addIfOdd()">如果是奇数就+1</button>
          <button onclick="addAsync()">两秒后+1</button>
        </div>
      </div>
    `
}
render()
store.subscribe(render)

function add1(){
    store.dispatch({type:'add',payload:1})
}
function add2(){
    store.dispatch({type:'add',payload:2})
}
function addIfOdd(){
    if(store.getState()%2 !== 0){
        store.dispatch({type:'add',payload:1})
    }
}
function addAsync(){
    setTimeout(()=>{
        store.dispatch({type:'add',payload:1})
    },2000)
}