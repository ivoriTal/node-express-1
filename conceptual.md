### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

callback, promises, async/await

- What is a Promise?
an object that may produce a single value some time in the future

- What are the differences between an async function and a regular function?
async functions always return a promise, regular functions can return a promise or not

- What is the difference between Node.js and Express.js?
node is a runtime environment for javascript, express is a framework for building web applications

- What is the error-first callback pattern?
the first argument to the callback is an error object, if there is no error, the first argument is null

- What is middleware?
functions that have access to the request and response objects, and the next middleware function in the application's request-response cycle

- What does the `next` function do?
calls the next middleware function in the application's request-response cycle
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

performance: 
structure: 
naming: 
