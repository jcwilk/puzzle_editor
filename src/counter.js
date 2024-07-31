// This function creates and returns a counter object with encapsulated state and behavior.
// It uses closures to maintain private variables and methods that interact with DOM elements.
export function buildCounter() {
  // The obj variable is an object that will hold the counter state and methods.
  // It starts with a count property initialized to 0.
  const obj = {
    count: 0,
  };

  // The updateCallback is a function that will be used to update the DOM element's content.
  // Initially, it's an empty function, but it will be replaced later.
  let updateCallback = () => {};

  // The increment method increases the count by 1 and calls the updateCallback function.
  // The use of closure here allows increment to access and modify obj.count and updateCallback,
  // even though they are not passed directly to it.
  obj.increment = () => {
    obj.count += 1; // Increment the count property of the obj by 1.
    updateCallback(`count is ${obj.count}`); // Call the updateCallback to update the DOM with the new count.
  };

  // The attach method is used to set up the updateCallback with the provided DOM element.
  // It also adds an event listener to the element, which triggers the increment method on click.
  obj.attach = function (element) {
    // Assign the updateCallback function to update the innerHTML of the provided element.
    updateCallback = (message) => element.innerHTML = message;

    // Add a click event listener to the element.
    // When the element is clicked, the increment method is called, updating the count and element.
    element.addEventListener('click', obj.increment);
  };

  // Return the obj, which now contains the count state and the increment and attach methods.
  // This object is a closure that "remembers" the environment in which it was created, including obj and updateCallback.
  return obj;
}
