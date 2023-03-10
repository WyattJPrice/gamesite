function urlhide(url) {
    var win = window.open()
    var url = url
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url
    win.document.body.appendChild(iframe)
  }
  
  var element = document.getElementById("imageid");
  element.addEventListener("click",function(){
  urlhide("https://paper-io.com/")
  })