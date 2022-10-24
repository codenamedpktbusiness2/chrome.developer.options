function eruda() {
    var script = document.createElement('script');
    script.src = "//cdnjs.cloudflare.com/ajax/libs/eruda/master";
    document.body.appendChild(script);
    script.onload = function () {
        eruda.init()
    }
}();

function eruda() {
    var script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = function () {
        eruda.init()
    }
}();
