// Initialize and add the map 
function initMap () { /* initMap is taken from the script I copied from google maps docs */
  // Your Location
  const loc = { lat: 51.507351, lng: -0.127758 }; /* Lat & lng get it from: get latitude and longitude from address on google */
  // Centrered map on location
  const map = new google.maps.Map(document.querySelector('.map')
  , {
    zoom:14,
    center: loc
  });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map:
    map});
   }

   // Sticky menu background
   window.addEventListener('scroll', function() {
   if (window.scrollY > 150) {
     document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      this.document.querySelector('#navbar').style.opacity = 1;
    }
   });

   // Smooth Scrolling
   $('#navbar a, .btn').on('click', function(event) {
     if (this.hash !== '') {
       event.preventDefault();

       const hash = this.hash;
      
       $('html, body').animate(
         {
           scrollTop: $(hash).offset().top - 100
         },
         800
       );

     }
   });
 