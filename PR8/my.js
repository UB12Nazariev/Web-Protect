c=0;
function f(){
    t = document.getElementById('b');
    if (c==0){
        b="2px solid #000000";
        t.value="1.Убрать Рамку";
        c=1;
    }
    else{
        b="0px solid #000000";
        t.value="1.Добавить Рамку";
        c=0;
    }
    elems=document.getElementsByTagName('h1');
    for(var i=0;i<elems.length;i++){
        elems[i].style.border=b;
    }
}
function f2(){
    var url = '07.gif';
    $(document).ready(function() {
    var image = new Image();
    image.src = url;
    $('p').after(image);
    $('h1').after(image);
    $('h2').after(image);
    $("p").css("fontSize", 20);
    $("h1").css("fontSize", 20);
    $("h2").css("fontSize", 20);
    }); 
}
