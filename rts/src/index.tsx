import ReactDOM from 'react-dom'
import EventComponent from './events/EventComponent'
import UserSearch from './refs/UserSearch'
import GuestList from './state/GuestList'

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
