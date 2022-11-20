function chrome.developer.options('eruda') {
    var script = document.createElement('script');
    script.src = "//github.com/mrpoons-studio/chrome.developer.options/raw/main/chrome.developer.options.js";
    document.body.appendChild(script);
    script.onload = function () {
        eruda.init()
    }
