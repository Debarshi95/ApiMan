import { Input, Select } from 'components'
import { httpMethods } from 'constants'

const App = () => {
  return (
    <div className="max-w-80 mx-auto mt-10">
      <div className="flex items-center border border-gray-600 rounded-sm">
        <Select options={httpMethods} defaultValue={httpMethods[0]} />
        <Input placeholder="https://api.com" />
      </div>

      <div className="flex items-center flex-1 border border-gray-600 rounded-sm mt-1">
        <p className="mx-2 w-32">Authorization</p>
        <Input placeholder />
      </div>

      <div className="items-center flex-1 flex border border-gray-600 rounded-sm mt-1">
        <p className="mx-2 w-32">Parameters</p>
        <Input placeholder />
      </div>

      <div className="items-center flex-1 flex border border-gray-600 rounded-sm mt-1">
        <p className="mx-2 w-32">Headers</p>
        <Input placeholder />
      </div>
    </div>
  )
}

export default App
