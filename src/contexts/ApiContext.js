import { createContext, useCallback, useMemo, useReducer } from 'react'
import { makeRequest } from 'utils/helperfuncs'

export const ApiContext = createContext()

const initialState = {
  method: 'GET',
  url: '',
  headers: {},
  authorization: null,
  body: {},
  parameters: null,
  response: {},
  loading: false,
  error: '',
}

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_METHOD':
      return { ...state, method: action.payload }
    case 'SET_HEADERS':
      return { ...state, headers: { ...action.payload } }
    case 'SET_BODY':
      return { ...state, body: { ...action.payload } }
    case 'SET_URL':
      return { ...state, url: action.payload }
    case 'SET_PARAMETERS': {
      const params = new URLSearchParams(action.payload).toString()
      return { ...state, url: `${state.url}?${params}` }
    }
    case 'SET_AUTHORIZATION':
      return { ...state, authorization: action.payload }
    case 'SET_RESPONSE':
      return { ...state, response: { ...action.payload } }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    default:
      return state
  }
}
const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState)

  const fetchData = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const res = await makeRequest(state)
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: 'SET_RESPONSE',
          payload: {
            data,
            status: res.status,
            time: res.time,
          },
        })
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error?.message || 'Some error occurred' })
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }, [dispatch, state])

  const value = useMemo(() => ({ state, dispatch, fetchData }), [state, fetchData])

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
}

export default ApiProvider
