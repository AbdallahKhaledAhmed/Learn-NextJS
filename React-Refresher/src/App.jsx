import { Card } from "./components/Card"
import { FormHandle } from "./components/FormHandle"
import { List } from "./components/Lists"

function User ({name,age,gender}) {
return (
  <div>
    <h1>name:{name}</h1>
    <p>age:{age}</p>
    <p>gender:{gender}</p>
  </div>
)
}




function App() {
  return (
    <>
    <Card>
     <User name="John" age="30" gender="Male"/>
    </Card>
     <User name="Jane" age="25" gender="Female"/>
     <User name="Jack" age="40" gender="Male"/>
     <FormHandle />
     <List />
    </>
  )
}

export default App
