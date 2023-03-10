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

  var element = document.getElementById("imageid1");
  element.addEventListener("click",function(){
  urlhide("https://www.google.com/logos/2019/july4th19/r6/july4th19.html?hl=en")
  })

  var element = document.getElementById("imageid2");
  element.addEventListener("click",function(){
  urlhide("https://littlealchemy.com/")
  })