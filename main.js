const cities=document.getElementById("cities")
const p = document.getElementById('resultt');
const adress = document.getElementById('adress');
const stars = document.getElementById('stars');
const map = document.getElementById('map');
const namep = document.getElementById('name');
const img = document.getElementById('img1');
const uskudar = document.getElementById('uskudar');
const dolmabahce = document.getElementById('dolmabahce');
const img12 = document.getElementById('img12');






const istanbul = [{
    adres: " Vişnezade, Dolmabahçe Cd., 34357 Beşiktaş/İstanbul",
    star: "4.8 ⭐⭐⭐⭐⭐",
    gmap: "https://goo.gl/maps/6ETLqPiz1TgN3Zky6",
    name: "Dolmabahçe Sarayı",
    resim:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Dolmabah%C3%A7e_Palace.JPG",
    idframe:"https://open.spotify.com/embed/track/0xRFMPIC1eo02aWXZSaHIO?utm_source=generator",
  },{
    adres: "Salacak, 34668 Üsküdar/İstanbul",
    star: "4.7 ⭐⭐⭐⭐⭐",
    gmap: "https://goo.gl/maps/QoZWA4tqkg5xY3A3A",
    name: "Kız Kulesi",
    resim:"https://im.haberturk.com/2021/09/06/ver1630919865/3183293_1920x1080.jpg",
    idframe:"https://open.spotify.com/embed/track/61a2MLrq4Mmyl6V4bBO6n1?utm_source=generator",
  }];

  const helsinki = [{
    adres: "Edvard Munchs Plass 1, 0194 Oslo, Norway",
    star: "4.1 ⭐⭐⭐⭐⚝",
    gmap: "https://goo.gl/maps/RimKTJQdqPQ3Zkmm6",
    name: "Munch Museum",
    resim:"https://estudioherreros.com/website/wp-content/uploads/2019/07/00_Munch-Photo_Einar_Aslaksen-01210_F_web.jpg",
    idframe:"https://open.spotify.com/embed/track/24nTZUgqU1P7fn074Pm3xZ?utm_source=generator",
  },{
    adres: "Sibeliuksen puisto, Mechelininkatu, 00250 Helsinki, Finland",
    star: "4.3 ⭐⭐⭐⭐⚝",
    gmap: "https://goo.gl/maps/fhvhZYchUxtS5Srf7",
    name: "Sibelius Monument",
    resim:"https://www.bautrip.com/images/what-to-visit/sibelius-monument-helsinki.jpg",
    idframe:"https://open.spotify.com/embed/track/1Sd8ITL4eKPkQkyKe5kEQ1?utm_source=generator" ,
  }];

  const amsterdam = [{
    adres: "Museumplein 6, 1071 DJ Amsterdam, Netherlands",
    star: "4.6 ⭐⭐⭐⭐⭐",
    gmap: "https://goo.gl/maps/hFA18jmbuBFRiS3YA",
    name: "Van Gogh Museum",
    resim:"http://justfunfacts.com/wp-content/uploads/2017/08/van-gogh-museum.jpg",
    idframe:"https://open.spotify.com/embed/track/4JAfGHoHncU0rJvHZdCjKj?utm_source=generator",
  },{
    adres: "Amsterdam, North Holland, Netherlands",
    star: "4.7 ⭐⭐⭐⭐⭐",
    gmap: "https://goo.gl/maps/fhvhZYchUxtS5Srf7",
    name: "Canals of Amsterdam",
    resim:"https://losjardines.info/imgs/535.jpeg",
    idframe:"https://open.spotify.com/embed/track/1Xi84slp6FryDSCbzq4UCD?utm_source=generator&theme=0" ,
  }];

  const tokyo = [{
    adres: "11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japan",
    star: "4.5 ⭐⭐⭐⭐⚝",
    gmap: "https://goo.gl/maps/vFQ9hn8UVe2GadeL7",
    name: "Shinjuku Gyoen National Garden",
    resim:"https://upload.wikimedia.org/wikipedia/commons/3/3d/Shinjuku_Gyoen_National_Garden_-_sakura_8.jpeg",
    idframe:"https://open.spotify.com/embed/track/1PgfSIxtR12Vp0GujWWCri?utm_source=generator&theme=0",
  },{
    adres: "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
    star: "4.5 ⭐⭐⭐⭐⚝",
    gmap: "https://goo.gl/maps/eUF8Bu4UpWrENTf49",
    name: "Senso-ji",
    resim:"https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/sensoji-temple-iStock-1083328636.jpg",
    idframe:"https://open.spotify.com/embed/track/0upFohXrGxIIAjyaJmCkMU?utm_source=generator&theme=0" ,
  }];


  let sarki2=0;


function selam() {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  var sayi=getRndInteger(0,1)

    var city

   if(cities.value=="istanbul"){
   city=istanbul
   }
   
       else if(cities.value=="amsterdam"){
            city=amsterdam}
            else if(cities.value=="tokyo"){
                city=tokyo}
                else{
                 city=helsinki
                }


    


    p.innerHTML="Here is your amazing place from"+" "+cities.value+"🥳 "
    namep.innerText=city[sayi].name
    adress.innerText=city[sayi].adres
    stars.innerText=city[sayi].star
    map.href=city[sayi].gmap
    map.removeAttribute("hidden")
    img.src=city[sayi].resim
    img.removeAttribute("hidden")
  
    uskudar.src=city[sayi].idframe
    uskudar.removeAttribute("hidden")
    
    
    console.log(sarki2)

   

    
}
