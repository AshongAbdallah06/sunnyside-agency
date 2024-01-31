import { mobileRenderMenu, mobileRenderStandout, mobileRenderTransform, desktopRender } from "./handleRenders.js";

function checkStyles() {
    const width = window.innerWidth;
  
    if (width < 760) {
        
        mobileRenderTransform();

        mobileRenderStandout();

        mobileRenderMenu();



        let isShowing = true;

        let menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', () => {
            
            if (isShowing) {
                document.querySelector('.mobile-menus').style.opacity = 1
                isShowing = false;
            } else {
                document.querySelector('.mobile-menus').style.opacity = 0
                isShowing = true;
            }
        })
    } else {
        desktopRender();

    }
}

checkStyles();


window.addEventListener('resize', () => {
    checkStyles();
});     