
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [
      { id: 1, avatar: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John', nickname: 'Johnny', age: 30, gender: 'Male', phone: '1234567890', email: 'john@example.com' },
      { id: 2, avatar: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane', nickname: 'Janie', age: 25, gender: 'Female', phone: '0987654321', email: 'jane@example.com' },
      { id: 3, avatar: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Charlie', nickname: 'Chuck', age: 42, gender: 'Male', phone: '7654321098', email: 'charlie@example.com' },
      { id: 4, avatar: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Diana', nickname: 'Dina', age: 24, gender: 'Female', phone: '6543210987', email: 'diana@example.com' },
      { id: 5, avatar: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Edward', nickname: 'Eddy', age: 31, gender: 'Male', phone: '5432109876', email: 'edward@example.com' },
      { id: 6, avatar: 'https://randomuser.me/api/portraits/women/6.jpg', name: 'Fiona', nickname: 'Fifi', age: 29, gender: 'Female', phone: '4321098765', email: 'fiona@example.com' },
      { id: 7, avatar: 'https://randomuser.me/api/portraits/men/7.jpg', name: 'George', nickname: 'Georgie', age: 37, gender: 'Male', phone: '3210987654', email: 'george@example.com' },
      { id: 8, avatar: 'https://randomuser.me/api/portraits/women/8.jpg', name: 'Hannah', nickname: 'Han', age: 26, gender: 'Female', phone: '2109876543', email: 'hannah@example.com' },
      { id: 9, avatar: 'https://randomuser.me/api/portraits/men/9.jpg', name: 'Isaac', nickname: 'Ike', age: 33, gender: 'Male', phone: '1098765432', email: 'isaac@example.com' },
      { id: 10, avatar: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Jasmine', nickname: 'Jaz', age: 27, gender: 'Female', phone: '0987654321', email: 'jasmine@example.com' },
      { id: 11, avatar: 'https://randomuser.me/api/portraits/men/11.jpg', name: 'Kevin', nickname: 'Kev', age: 38, gender: 'Male', phone: '9876543210', email: 'kevin@example.com' },
      { id: 12, avatar: 'https://randomuser.me/api/portraits/women/12.jpg', name: 'Linda', nickname: 'Lin', age: 25, gender: 'Female', phone: '8765432109', email: 'linda@example.com' },
      { id: 13, avatar: 'https://randomuser.me/api/portraits/men/13.jpg', name: 'Michael', nickname: 'Mike', age: 40, gender: 'Male', phone: '7654321098', email: 'michael@example.com' },
      { id: 14, avatar: 'https://randomuser.me/api/portraits/women/14.jpg', name: 'Nancy', nickname: 'Nan', age: 23, gender: 'Female', phone: '6543210987', email: 'nancy@example.com' },
      { id: 15, avatar: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Oliver', nickname: 'Ollie', age: 32, gender: 'Male', phone: '5432109876', email: 'oliver@example.com' }
    ],
    selectedUser: null,
    newUser: {
      name: '',
      nickname: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
    },
  };

  createUser = () => {
    const { newUser } = this.state;
    const id = Math.random();
    const avatar = `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`;
    const user = { id, avatar, ...newUser };
    this.setState({ users: [...this.state.users, user], newUser: { name: '', nickname: '', age: '', gender: '', phone: '', email: '' } });
  };

  updateUser = (id) => {
    const name = window.prompt('Enter new name');
    this.setState({
      users: this.state.users.map(user =>
        user.id === id ? { ...user, name } : user
      ),
    });
  };

  deleteUser = (id) => {
    this.setState({ users: this.state.users.filter(user => user.id !== id) });
  };

  selectUser = (user) => {
    this.setState({ selectedUser: user });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <div className='background'>
        <div className="nav-row">
          <h1>Users List!</h1>
          <button type="button" className="btn btn-dark" onClick={this.createUser}>Create</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Nickname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <td><img src={user.avatar} alt="avatar" className="avatar" onClick={() => this.selectUser(user)} /></td>
                <td onClick={() => this.selectUser(user)}>{user.name}</td>
                <td>{user.nickname}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => this.updateUser(user.id)}>Update</button>
                  <button onClick={() => this.deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.selectedUser && <div>
          <h2>Selected User:</h2>
          <p>Name: {this.state.selectedUser.name}</p>
          <p>Nickname: {this.state.selectedUser.nickname}</p>
          <p>Age: {this.state.selectedUser.age}</p>
          <p>Gender: {this.state.selectedUser.gender}</p>
          <p>Phone: {this.state.selectedUser.phone}</p>
          <p>Email: {this.state.selectedUser.email}</p>
        </div>}
        <div>
          <h2>Create User</h2>
          <input type="text" name="name" value={this.state.newUser.name} placeholder="Name" onChange={this.handleChange} />
          <input type="text" name="nickname" value={this.state.newUser.nickname} placeholder="Nickname" onChange={this.handleChange} />
          <input type="text" name="age" value={this.state.newUser.age} placeholder="Age" onChange={this.handleChange} />
          <input type="text" name="gender" value={this.state.newUser.gender} placeholder="Gender" onChange={this.handleChange} />
          <input type="text" name="phone" value={this.state.newUser.phone} placeholder="Phone" onChange={this.handleChange} />
          <input type="text" name="email" value={this.state.newUser.email} placeholder="Email" onChange={this.handleChange} />
          <button onClick={this.createUser}>Create</button>
        </div>
      </div>
    );
  }
}

export default App;
