// javascript starts
makenews = (json) =>{
var read = localStorage[json.newsId];
var validate= (findDays(json.date) < 7) ? true:false;
var header = json.header;
var summary = json.s;
var imgs = json.imgs;
for(img in Object.keys(imgs)){
let currentImg = Object.values(imgs)[img],src = currentImg.url,alt = currentImg.alt,pos = currentImg.pos,left = pos.left,top = pos.top,
}
}
