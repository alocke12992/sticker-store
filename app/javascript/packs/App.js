import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Store />
      </div>
    )
  }
}

export default App

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('store'))
})