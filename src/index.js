
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
    }
    
    window.onload = ()=> {
        buildMenu();
    };