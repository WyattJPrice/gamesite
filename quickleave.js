function amazing() {
   window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "p":
        this.location.replace(https://classroom.google.com/u/0/)
        break;
      case "":
        // code for "up arrow" key press.
        break;
      case "":
        // code for "left arrow" key press.
        break;
      case "":
        // code for "right arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window 
}
