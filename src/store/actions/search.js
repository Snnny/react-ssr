import { GET_SEARCH, SET_SEARCH, CLEAR_SEARCH } from '../constants'

export const getSearchList=()=> ({ type: GET_SEARCH })

export const setSaveSearch=(key)=> ({ type: SET_SEARCH, data: key})

export const clearSearch =()=> ({ type: CLEAR_SEARCH })
