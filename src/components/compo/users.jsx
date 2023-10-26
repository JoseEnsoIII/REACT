import React from 'react';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) { // Change 'isLoaded' to 'dataFetched'
      return <div>Loading...</div>;
    } else {
      return (
        <ol>
          {users.map((item) => (
            <li key={item.id}>
              {item.name} - {item.email} {/* Change 'item.artist' to 'value.artist' */}
            </li>
          ))}
        </ol>
      );
    }
  }
}
