
buildMenuItem = (camera)=>{
    let menuItem = document.createElement('div');
    
    menuItem.id = camera.number;
    menuItem.className = 'menu-item';
    menuItem.title = camera.name;
    menuItem.innerText = camera.name;
    return menuItem;
    }
    
    buildMenu = function() {
        let nav = document.querySelector('nav');

        trafficCameras.forEach((camera) => {
            let cameraMenuItem = buildMenuItem(camera);
            nav.appendChild(cameraMenuItem);
        });

        nav.addEventListener('click', function(event){
            let cameraNumber = event.target.id;

            let camera = trafficCameras.find(function(camera){
                return camera.number === cameraNumber;
            });
            updateMap(camera.lat, camera.lng);
            updateImages(camera);
        });
    }

    function updateImages(camera){
        let cameraImage = document.querySelector('#camera-image');
        cameraImage.src = camera.getImageURL();

        let directionsDiv = document.querySelector('#directions');

        directionsDiv.innerHTML = '';

        let directionData = camera.getDirectionImages();

        directionData.forEach(function(data){
            
            let div = document.createElement('div');
            div.className = 'directionCamera';
            
            
            let img = document.createElement('img');
            img.src = data.url;

            div.appendChild(img);

            let span = document.createElement('span');
            span.innerText = data.direction.toUpperCase();
            div.appendChild(span);

            directionsDiv.appendChild(div);
        });

        let imagesDiv = document.querySelector('#images');
        imagesDiv.classList.remove('hidden');
    }
    
    let map;
    let marker;

    function updateMap(lat, lng) {

        if(marker){
            marker.setLatLng({
                lat: lat,
                lng: lng
            })
        }
        else{
            marker = L.marker([lat, lng]).addTo(map);
        }
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