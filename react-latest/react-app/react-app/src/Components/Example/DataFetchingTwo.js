import React ,{useState, useEffect, useReducer} from  'react'
import axios from "axios"
const initialState = {
    loading:true,
    error:'',
    post:{}
}
const reducer = (state,action) => {
        switch(action.type){
            case 'FETCH_SUCCESS' :
            return  {
                    loading:false,
                    error:'',
                    post:action.payload
            }
            case  'FETCH_ERROR' :
            return  {
                loading:false,
                error:'Some thing went wrong',
                post:{}
            }

        }
    }
       
function DataFetchingTwo() {

    const  [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then(response => {
               dispatch({type:'FETCH_SUCCESS',payload:response.data})
            })
            .catch(error => {
                dispatch({type:'FETCH_SUCCESS'})
            })
    },[])
  return (
    <div>  
        {state.loading ? 'loading':state.post.title}
        {state.error ? state.error:null}
        </div>
  )
}

export default DataFetchingTwo