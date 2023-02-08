
var OSName="Unknown OS";
if (navigator.userAgent.indexOf("Win")!=-1) OSName="Windows";
if (navigator.userAgent.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.userAgent.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.userAgent.indexOf("Linux")!=-1) OSName="Linux";
      
    // Display the OS name
console.log(OSName)

// Get a reference to the div you want to auto-scroll.
var someElement = document.querySelector('.messages');
// Create an observer and pass it a callback.
var observer = new MutationObserver(scrollToBottom);
// Tell it to look for new children that will change the height.
var config = {childList: true};
observer.observe(someElement, config);


  // Here's our main callback function we passed to the observer
  function scrollToBottom() {
    someElement.scrollTop = someElement.scrollHeight;
  }