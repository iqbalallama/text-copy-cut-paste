// type animation start
const typed = new Typed ('.text',{
    strings : ['Copy','Cut','Paste'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})
// type animation end
// copy text part start
const copy = document.getElementById('copy-text');
document.getElementById('copy-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(copy.value);
    alert('successfully copy your text');
})
// copy text part end
// cut text part start
const cut = document.getElementById('cut-text');
document.getElementById('cut-btn').addEventListener('click',function(){
    navigator.clipboard.writeText(cut.value);
    cut.value = '';
})
// cut text part end
// paste text part start
const paste = document.getElementById('paste-text');
document.getElementById('paste-btn').addEventListener('click',function(){
    paste.value = '';
    navigator.clipboard.readText()
    .then(function(text){
        paste.value = text;
    })
})
// paste text part end