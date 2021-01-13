const redux = require('redux');
const createStore= redux.createStore;

const initialState= {
    counter: 1
}
//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type ==="INC_COUNTER"){
        return{  
        ...state,
        counter : state.counter + 1  
        };}
    if (action.type === "ADD_COUNTER"){
        return{  

        ...state,
        counter: state.counter+ action.value  
        };}
    return state;
}
//store
const store  = createStore(rootReducer);
console.log(store.getState());

// //Subscription
// print message every time the state change (current state of the store)
store.subscribe(() => {
console.log('[subscription]', store.getState());
});
 

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

