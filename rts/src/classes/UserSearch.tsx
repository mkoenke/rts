import React from 'react'

interface UserSearchProps {
  users: {
    name: string
    age: number
  }[]
}

interface UserSearchState {
  name: string
  user: { name: string; age: number } | undefined
}

// const users = [
//   { name: 'Sarah', age: 20 },
//   { name: 'Alex', age: 20 },
//   { name: 'Michael', age: 20 },
// ]

class UserSearch extends React.Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  }

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name
    })
    this.setState({ user: foundUser })
  }
  render() {
    const { user, name } = this.state
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    )
  }
}

export default UserSearch
