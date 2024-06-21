import React from 'react';
import "../App.css"

const Counter = () => {
  const counters = [
    { title: "Lorem ipsum", value: "123+", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ." },
    { title: "Lorem ipsum", value: "12+", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun" },
    { title: "Lorem ipsum", value: "12+", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun." },
    { title: "Lorem ipsum", value: "123", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ." }
  ];

  return (
    <div className="counter-container">
      {counters.map((counter, index) => (
        <div key={index} className="counter-box">
          <h3>{counter.title}</h3>
          <h2>{counter.value}</h2>
          <p>{counter.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Counter;
