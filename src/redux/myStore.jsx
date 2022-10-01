import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { thunkMiddleware } from 'redux-thunk'
import {axios} from 'axios'


const DarkMode = 'DarkMode'
const ShowDrawer = 'ShowDrawer'

export function setDarkMode() {
    return {
        type: DarkMode,
        info: 'toggle dark mode'
    }
}

export function setShowDrawer(){
    return {
        type:ShowDrawer,
        info:'open and close the drawer'
    }
}


const initialState = {
    darkMode: false,
    showDrawer: false
}

// const initState = {
//     loading : false,
//     projects:[],
//     err :  ''
// }

// const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST'
// const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'
// const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE'


// const fetchProjectsRequest = ()=>{
//     return {
//         type:FETCH_PROJECTS_REQUEST
//     }
// }

// const fetchProjectsSuccess=projects=>{
//    return {
//     type: FETCH_PROJECTS_SUCCESS,
//     payload: projects
//    }
// }

// const fetchProjectsFailure = error=>{
//   return {
//     type : FETCH_PROJECTS_FAILURE,
//     payload : error
//   }
// }

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DarkMode: return {
            ...state,
            darkMode : !state.darkMode
        }
        case ShowDrawer:return{
            ...state,
            showDrawer : !state.showDrawer
        }
        default: return state

    }
}

// const FetchReducer = (state = initState,action)=>{
//     // eslint-disable-next-line default-case
//     switch (action.type){
//         case FETCH_PROJECTS_REQUEST:
//             return{
//                 ...state,
//                 loading:true,
//             }
//         case FETCH_PROJECTS_SUCCESS:
//             return {
//                 loading:false,
//                 projects:action.payload,
//                 error:''
//             } 
//         case FETCH_PROJECTS_FAILURE:
//             return {
//                 loading:false,
//                 projects:[],
//                 error: action.payload
//             }       
//     }
// }

// const fetchProjects = ()=> {
//     return function(dispatch){
//         dispatch(fetchProjectsRequest())
//         axios.get('https://jsonplaceholder.typicode.com/posts').then(
//             response=> {
//                 const projects = response.data
//                 dispatch(fetchProjectsSuccess(projects))
//                 //data is the array of projects
//             }).catch(error=>{
//                 dispatch(fetchProjectsFailure(error.message))
//                 //error message
//             })
//     }
// }

// export const Store = createStore(FetchReducer,applyMiddleware(thunkMiddleware))
const store = createStore(reducer)
export default store



// Store.subscribe(()=>{ console.log(Store.getState());})
// Store.dispatch(fetchProjects)
