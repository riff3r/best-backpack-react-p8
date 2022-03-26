import React from "react";

const Answer = () => {
  return (
    <div>
      <div class="card">
        <h5 class="card-header">Question & Answer Section</h5>
        <div class="card-body">
          <h5 class="card-title">How react works?</h5>
          <p class="card-text">
            React mainly maintains a tree of HTML. React allows to re-construct
            DOM in JavaScript and push only those changes to the DOM which have
            actually occurred. For this process react creates a virtual DOM and
            use diff algorithm. React use JSX, hooks etc. React also use
            javascript compiler. <br />
          </p>

          <h5 class="card-title">Difference between props and state?</h5>
          <p class="card-text">
            1. The props in React are the inputs to a component of React and
            Every class component in react has a built-in state object
            <br />
            2. Props passes data from parent to child component and state
            usually passed within same component.
            <br />
            3. State can only be passed as props
            <br />
            4. Props is immutable, cannot be modified and state is mutable, can
            be modified.
            <br />
            5. Props are read-only and state can do both - read and write.
          </p>

          <h5 class="card-title">How useState works?</h5>
          <p class="card-text">
            The useState() is a built-in React Hook that allows having state
            variables in functional components. It should be used when the DOM
            has something that is dynamically manipulating/controlling.
            useState() returns a variable with the current state value and
            another function to update this value. We can't change the value
            directly, it's a common mistake we all suffers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answer;
