import {configureStore, createSlice} from "@reduxjs/toolkit"

// const INITIAL_VALUE = {
//     counter: 0,
//     toggle: false
// }

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal: 0},
    reducers: {
        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--;
        },
        add: (state, action) => {
            state.counterVal += Number(action.payload);
        },
        subtract: (state, action) => {
            state.counterVal -= Number(action.payload);
        }
    }
})

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: false,
    reducers: {
        toggle: (state) => {
            return state = !state
        }
    }
})

// const counterReducer = (store = INITIAL_VALUE, action) => {
//     if(action.type === 'INCREMENT'){
//         return {...store, counter: store.counter + 1}
//     } else if (action.type === 'DECREMENT'){
//         return {...store, counter: store.counter - 1}
//     } else if (action.type === 'ADD'){
//         return {...store, counter: store.counter + Number(action.payload.num)}
//     } else if (action.type === 'SUBTRACT'){
//         return {...store, counter: store.counter - Number(action.payload.num)}
//     } else if ( action.type === 'TOGGLE'){
//         return {...store, toggle: !store.toggle}
//     }
//     return store
// }

const counterStore= configureStore({
    reducer: {
        counter: counterSlice.reducer,
        toggle: toggleSlice.reducer
    }
})

export const counterAction = counterSlice.actions
export const toggleAction = toggleSlice.actions
export default counterStore