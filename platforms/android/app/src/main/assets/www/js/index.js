var map;
var coord= {lat:-0.212091, lng:-78.504887};
var udla= {lat:-0.168785,lng: -78.470889};
function iniciarMap(){
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center: coord,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
    var marker = new google.maps.Marker({
        position: udla,
        map: map
    });

    var distancia=[coord,udla]
    var trazo = new google.maps.Polyline({path:distancia,strokeColor:"#0000FF",strokeOpacity:0.8,strokeWeight:3});
    trazo.setMap(map);
}