import { useContext } from 'react'
import { CodeEditor, Header, Input, Parameter, Select } from 'components'
import { httpMethods } from 'constants'
import { ApiContext } from 'contexts/ApiContext'
import { isValidUrl } from 'utils/helperfuncs'

const App = () => {
  const { state, dispatch, fetchData } = useContext(ApiContext)

  return (
    <div className="max-w-80 mx-auto mt-10">
      <div className="flex items-center border border-gray-600 rounded-sm">
        <Select
          options={httpMethods}
          defaultValue={httpMethods[0]}
          onSelected={(value) => dispatch({ type: 'SET_METHOD', payload: value })}
        />
        <Input
          placeholder="https://api.com"
          onChange={(value) => dispatch({ type: 'SET_URL', payload: value })}
          error={!isValidUrl(state.url)}
          value={state.url}
        />
      </div>

      <div className="flex items-center flex-1 border border-gray-600 rounded-sm mt-1">
        <p className="mx-2 w-32">Authorization</p>
        <Input
          placeholder="token"
          onChange={(value) => dispatch({ type: 'SET_AUTHORIZATION', payload: value })}
        />
      </div>

      <Parameter />
      <Header />

      <div className="items-center bg-gray-50  border border-gray-600 rounded-sm mt-1">
        <p className="w-full p-2 border border-bottom-gray-800">Body</p>
        <CodeEditor
          onChange={(value) => dispatch({ type: 'SET_BODY', payload: JSON.parse(value) })}
          data={state.response?.body}
        />
      </div>

      <button
        disabled={!state.url}
        type="button"
        className="bg-green-600 py-2 px-4 my-4 rounded-sm text-white"
        onClick={fetchData}
      >
        Make Request
      </button>

      <div className="rounded-sm my-5">
        <header className="flex content-between items-center">
          <h3 className="w-full mb-2">Response</h3>
          <div className="flex items-center">
            <p className="w-full mb-2">
              Status <span>{state.response?.status}</span>
            </p>
            <p className="w-full mb-2">
              Time <span>{state.response?.time}</span>
            </p>
          </div>
        </header>

        <CodeEditor data={state.response?.data} disabled />
      </div>
    </div>
  )
}

export default App
