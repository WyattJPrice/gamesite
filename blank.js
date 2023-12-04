function urlhide(url) {
  var win = window.open()
  var url = url
  var iframe = win.document.createElement('iframe')
  iframe.style.position = "fixed";
  iframe.style.top = "0%";
  iframe.style.left = "0";
  iframe.style.bottom = "0";
  iframe.style.right = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.margin = "0";
  iframe.style.padding = "0";
  iframe.style.overflow = "hidden";
  iframe.src = url
  win.document.body.appendChild(iframe)
}

var element = document.getElementById("imageid");
element.addEventListener("click", function () {
  urlhide("https://paper-io.com/")
})

var element = document.getElementById("imageid2");
element.addEventListener("click", function () {
  urlhide("https://littlealchemy.com/")
})

var element = document.getElementById("imageid3");
element.addEventListener("click", function () {
  urlhide("https://html5.gamemonetize.co/ugi7ftbv2kgodcq7vful9u9v34wein5z/")
})

var element = document.getElementById("private");
element.addEventListener("click", function () {
  urlhide("https://paper-io.com/ps/?p-us1qjihoel")
})

var element = document.getElementById("imageid15");
element.addEventListener("click", function () {
  urlhide("https://www.sporcle.com/")
})