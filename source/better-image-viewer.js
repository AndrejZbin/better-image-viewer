var current_zoom = 100;
var zoom_amount = 5; 
var img;

if (document.toString()==="[object ImageDocument]") {
    console.log('Better image viewer');
    let body = document.getElementsByTagName('body')[0]
    body.style.height = "100%";
    body.style.overflow = "hidden";
    
    img=document.getElementsByTagName('img')[0];
    document.addEventListener('wheel', rollFunction);
}

function roundZoom(value) {
    let mod=value%10;
    value-=mod;
    if (mod>0 && mod<5) mod = 5;
    else if (mod>5) mod = 10;
    value+=mod;
    return Math.max(10, Math.min(400, value));
}

function rollFunction(event) {
    if (!event.deltaY) return;
    current_zoom = roundZoom(current_zoom-zoom_amount*Math.sign(event.deltaY));
    zoom(current_zoom);
}

function zoom(value) {
    img['width'] = img['naturalWidth']*value/100.0;
    img['height'] = img['naturalHeight']*value/100.0;
}