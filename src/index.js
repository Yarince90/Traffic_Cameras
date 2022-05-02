
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
            console.log(cameraNumber, camera);
        });
    }
    
    window.onload = ()=> {
        buildMenu();
    };