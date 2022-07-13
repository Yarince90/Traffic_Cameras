//Returns a menu item <div> for a camera object
buildMenuItem = (camera)=>{
    let menuItem = document.createElement('div');
    menuItem.id = camera.number;
    menuItem.className = 'menu-item';
    menuItem.title = camera.name;
    menuItem.innerText = camera.name;
    return menuItem;
    }
    
    //Creates camera menu items and registers a click handler
    buildMenu = function() {
        let nav = document.querySelector('nav');

        trafficCameras.forEach((camera) => {
            let cameraMenuItem = buildMenuItem(camera);
            nav.appendChild(cameraMenuItem);
        });

        //Adds a click handler
        nav.addEventListener('click', function(event){
            //Find what camera ID was clicked
            let cameraNumber = event.target.id;
            //Find camera obj based on ID
            let camera = trafficCameras.find(function(camera){
                return camera.number === cameraNumber;
            });
            //Updates img list and map based on camera clicked
            updateMap(camera.lat, camera.lng);
            updateImages(camera);
        });
    }

    function updateImages(camera){
        //Set camera URL for #camera-image <img> element
        let cameraImage = document.querySelector('#camera-image');
        //Get the URL from our camera via its prototype method
        cameraImage.src = camera.getImageURL();

        //Do the same for all the direction image URLs
        //Build a new <img> for each direction and place in the
        //Directions container
        let directionsDiv = document.querySelector('#directions');
        // Remove any existing content so we can add new data
        directionsDiv.innerHTML = '';
        let directionData = camera.getDirectionImages();

        //Create a wrapper <div> to hold everything
        directionData.forEach(function(data){
            
            let div = document.createElement('div');
            div.className = 'directionCamera';
            
            // Create and put an <img> inside the wrapper <div>
            let img = document.createElement('img');
            img.src = data.url;

            div.appendChild(img);

            //Create and add a <span> with the direction, add to <div>
            let span = document.createElement('span');
            span.innerText = data.direction.toUpperCase();
            div.appendChild(span);

            // Put our wrapper <div> into the container <div> of directions
            directionsDiv.appendChild(div);
        });

        // Remove .hidden class from our images div (if present)
        let imagesDiv = document.querySelector('#images');
        imagesDiv.classList.remove('hidden');
    }
    
    // Keep references to map and marker, so we can move/update them
    let map;
    let marker;

    function updateMap(lat, lng) {
        // Move or Create a marker to this intersection
        if(marker){
            marker.setLatLng({
                lat: lat,
                lng: lng
            })
        }
        else{
            marker = L.marker([lat, lng]).addTo(map);
        }
        // Update the map's location
        map.setView([lat, lng]);
    }
    
    function buildMap() {
        let senecaCoords = [43.7952, -79.3497];
        
        
        map = L.map('map').setView(senecaCoords, 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


    }

    window.onload = ()=> {
        buildMenu();
        buildMap();
    };