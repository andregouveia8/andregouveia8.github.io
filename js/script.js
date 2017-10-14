$(document).ready(function(){
    // Adicionar smooth scrolling a todos os links da navbar + o link do footer
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Garantir que o this.hash tem um valor antes de sobrepor o seu comportamento inicial
    if (this.hash !== "") {
        // Previne o comportamento do clique por omissão
        event.preventDefault();
        // Armazena hash
        var hash = this.hash;
        // Usar o método animate() do jQuery para adicionar uma rolagem suave
        // O número (900) especifica o nº de milissegundos que a rolagem demora até chegar à área específica
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900, function(){
            // Adiciona hash (#) à URL quando a rolagem termina (comportamento do clique por omissão)
            window.location.hash = hash;
            });
        } // End if
    });
    })


    function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(41.320796, -8.464205), 
        zoom: 15,

        styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"lightness":40},{"color":"#a1a1a1"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"lightness":17},{"weight":1.2},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"},{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"color":"#231f20"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#231f20"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#231f20"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#231f20"},{"lightness":"0"},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ff822e"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#a1a1a1"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#111111"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#aeaeae"}]}]
    }
    var myCenter = new google.maps.LatLng(41.320796, -8.464205);
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
    }

