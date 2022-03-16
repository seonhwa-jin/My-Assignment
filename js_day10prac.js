const clock = document.getElementById("clock");
const x_mas = new Date(2022,11,25);


function d_day (){
  
  const today = new Date();
  const gap = x_mas.getTime() - today.getTime();
  const realgap = gap/1000;

  const count_day = Math.floor(realgap/60/60/24)+1;
  const mango = realgap - (count_day*86400);
  
  const count_hour = Math.floor(mango/60/60)+24;
  const grape = mango - (count_hour*3600);

  const count_min = Math.floor(grape/60)+1440 ;
  const melon = grape - (count_min*60);

  const count_sec = Math.floor(melon)+86400;
  clock.innerText= `크리스마스까지 ${count_day}일 ${count_hour}시 ${count_min}분 ${count_sec}초 남았습니다.`
}

setInterval(d_day,1000);
d_day();
