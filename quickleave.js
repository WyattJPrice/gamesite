function amazing() {
   window.addEventListener('keydown', function (e) {
    if (e.key == "p") {
      location.replace("https://classroom.google.com/u/0/")
    }
  }, false); 
}

function shield(url) {
  var win = window.open()
  var url = url
  var iframe = win.document.createElement('iframe')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url
  win.document.body.appendChild(iframe)
}
