function eruda('cloudflare') {
    var script = document.createElement('script');
    script.src = "//cdnjs.cloudflare.com/ajax/libs/eruda/master";
    document.body.appendChild(script);
    script.onload = function () {
        eruda.init()
    }
}();

function eruda('jsdeliver') {
    var script = document.createElement('script');
    script.src = "//cdn.jsdeliver.net/npm/eruda/master";
    document.body.appendChild(script);
    script.onload = function () {
        eruda.init()
    }
();
