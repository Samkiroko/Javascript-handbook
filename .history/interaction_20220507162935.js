// alert

/*
It shows a message and waits for the user to press ok 
the  user can't interact with the rest until they press thr "model window"
*/

// prompt

/*
it accept two arguments
*/

// result = prompt(title, [
//     default
// ]);

let score = prompt('your grades are?', 0)

alert(`Your grade is worth this: ${score}`)

// confirm

/*
the function confirm shows a model window with a question and two buttons ok and cancel true for ok false for cancel.

*/

let isBoss = confirm('Are you the boss')

alert(isBoss)

// summary

/*
 * We covered 3 browser-specific functions to interact with visitors:

alert
shows a message.
prompt
shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
confirm
shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:

The exact location of the modal window is determined by the browser. Usually, it’s in the center.
The exact look of the window also depends on the browser. We can’t modify it.
That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if “bells and whistles” do not matter much, these methods work just fine.
 */