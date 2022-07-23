import { useCallback, useContext, useState } from 'react'
import { Input } from 'components'
import { ApiContext } from 'contexts/ApiContext'

const Parameter = () => {
  const [parameters, setParameters] = useState({})

  const { dispatch } = useContext(ApiContext)

  const handleChange = useCallback((val, type) => {
    setParameters((prevParameters) => {
      if (type === 'SET_KEY') {
        const headerObj = {}
        headerObj[val] = ''
        return { ...headerObj }
      }
      const duplicateObj = { ...prevParameters }
      const key = Object.keys(prevParameters)
      duplicateObj[key] = val
      return { ...duplicateObj }
    })
  }, [])

  const dispatchParameters = () => {
    if (Object.keys(parameters)) {
      dispatch({ type: 'SET_PARAMETERS', payload: { ...parameters } })
    }
  }
  return (
    <div className="items-center flex-1 flex border border-gray-600 rounded-sm mt-1">
      <p className="mx-2 w-32">Parameters</p>
      <div className="flex w-full">
        <Input
          placeholder="key"
          className="border-r border-gray-800"
          onChange={(key) => handleChange(key, 'SET_KEY')}
        />
        <Input
          placeholder="value"
          onChange={(value) => handleChange(value, 'SET_VALUE')}
          onBlur={dispatchParameters}
        />
      </div>
    </div>
  )
}

export default Parameter
