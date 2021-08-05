//XMLHttprequest -> are used are to interct with servers via API
//1.creating an XHR object
//new keboard
var reuest=new XMLHttpRequest();
//2.opening a connection (spcifiy the URL)
reuest.open('GET','https://restcountries.eu/rest/v2/all',true);
reuest.send();
reuest.onload=function(){
    var data = JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<250;i++){
    var cname=data[i].name;
    var lang=data[i].latlng;
    wetherdata(cname,...lang)
        
    }
}
function wetherdata (name,lat,lang){

var req = new XMLHttpRequest();
var url = 'https:api.openwethermap.org/data/2.5wether?lat='+lat+'&lon='+lang+'&appid=c09a5620dae326dee7e869fd85ec166f'
req.open('GET',url,true);
req.send();
req.onload=function(){
var data=JSON.parse(this.response);
console.log(`${name}:${data.main.temp}`)
}
}