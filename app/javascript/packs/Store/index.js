import React from 'react';

class Store extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => {
          return (<h2>{product.name}</h2>)
        })}
      </div>
    )
  }
}

export default Store;