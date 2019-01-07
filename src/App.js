import React from 'react';

const productItemView = (product) =>
  <li style={{ padding: "30px", listStyle: "none", border: "1px solid #000", margin: "5px" }}>
    <b>{product}</b> <br />
    $ {(Math.random() * 60000).toFixed(0)+30000} <br />
    <button>Buy</button>
  </li>

export default () =>
  <section>
    <h2>Cool Models in 2019</h2>
    <ul style={{ display: 'flex', padding: '0' }}>
      { ['XC40', 'XC90', 'S60', 'Cool','Yey'].map(productItemView) }
    </ul>
  </section>;
