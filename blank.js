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
  urlhide("https://paperio.site/")
})

var element = document.getElementById("imageid1");
element.addEventListener("click", function () {
  window.open("https://www.google.com/logos/2019/july4th19/r6/july4th19.html?hl=en")
})

var element = document.getElementById("imageid2");
element.addEventListener("click", function () {
  urlhide("https://littlealchemy.com/")
})

var element = document.getElementById("private");
element.addEventListener("click", function () {
  urlhide("https://paper-io.com/ps/?p-us1qjihoel")
})

var element = document.getElementById("1v1");
element.addEventListener("click", function () {
  urlhide("https://1v1.lol/")
})

var element = document.getElementById("sporcle");
element.addEventListener("click", function () {
  urlhide("https://www.sporcle.com/")
})

