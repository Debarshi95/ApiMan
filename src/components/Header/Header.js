import { useCallback, useContext, useState } from 'react'
import { Input } from 'components'
import { ApiContext } from 'contexts/ApiContext'

const Header = () => {
  const [headers, setHeaders] = useState({})
  const { dispatch } = useContext(ApiContext)

  const handleChange = useCallback((val, type) => {
    setHeaders((prevHeaders) => {
      if (type === 'SET_KEY') {
        const headerObj = {}
        headerObj[val] = ''
        return { ...headerObj }
      }
      const duplicateObj = { ...prevHeaders }
      const key = Object.keys(prevHeaders)
      duplicateObj[key] = val
      return { ...duplicateObj }
    })
  }, [])

  const dispatchHeaders = () => dispatch({ type: 'SET_HEADERS', payload: { ...headers } })

  return (
    <div className="items-center flex-1 flex border border-gray-600 rounded-sm mt-1">
      <p className="mx-2 w-32">Headers</p>
      <div className="flex w-full">
        <Input
          placeholder="key"
          className="border-r border-gray-800"
          onChange={(key) => handleChange(key, 'SET_KEY')}
        />
        <Input
          placeholder="value"
          onBlur={dispatchHeaders}
          onChange={(value) => handleChange(value, 'SET_VALUE')}
        />
      </div>
    </div>
  )
}

export default Header
