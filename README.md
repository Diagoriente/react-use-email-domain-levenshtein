# react-use-email-domain-levenshtein

📭 React hook for suggest email address based on the Levenshtein distance between the given address and a list of popular domains.

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Demo](#demo)

## Installation

To install, you can use [npm](https://www.npmjs.com/package/@diagoriente/react-use-email-domain-levenshtein):

    $ npm install --save @diagoriente/react-use-email-domain-levenshtein
    $ yarn add @diagoriente/react-use-email-domain-levenshtein

## Examples

Here is a simple example of `react-use-email-domain-levenshtein`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import useDomainLevenshtein from "react-use-email-domain-levenshtein";

function App() {
  const { bind, suggested } = useDomainLevenshtein();

  return (
    <>
      <input type="email" name="email" required {...bind} />

      <p>
        Suggested email address :{" "}
        {suggested?.length ? suggested : "None for the moment"}
      </p>
    </>
  );
}

ReactDOM.render(<App />, appElement);
```

You can find the example in the `examples` directory, which you can run in a
local development server using `npm start` or `yarn start`.

# Demo

There is a demo hosted on [CodeSandbox](https://codesandbox.io/s/diagoriente-react-hook-useemaildomainlevenshtein-dmi718).
