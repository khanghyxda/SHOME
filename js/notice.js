var password = window.prompt("password","");
var editor = new Quill('#editor', {
    modules: { toolbar: '#toolbar' },
    theme: 'snow'
});