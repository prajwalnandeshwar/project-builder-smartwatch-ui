var day_list=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

var small_time=document.getElementsByClassName("time_small")[0];
var big_time=document.getElementsByClassName("time_big")[0];
var day=document.getElementsByClassName("day")[0];

function time () {
var d=new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var day = d.getDay();
if(hours<10){
    hours=`0${hours}`;
}
if(minutes<10){
  minutes=`0${minutes}`;
  }

small_time.innerHTML=hours+":"+ minutes;
big_time.innerHTML=hours+":"+minutes;
day.innerHTML=day_list[day]
}
setInterval(time,1000);
