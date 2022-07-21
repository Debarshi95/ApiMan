import { Input, Select } from 'components'
import { httpMethods } from 'constants'

const App = () => {
  return (
    <div className="max-w-80 mx-auto mt-10">
      <div className="flex items-center border border-gray-600 rounded-sm">
        <Select options={httpMethods} defaultValue={httpMethods[0]} />
        <Input placeholder="https://api.com" className="p-2 w-full bg-gray-100" />
      </div>
    </div>
  )
}

export default App
