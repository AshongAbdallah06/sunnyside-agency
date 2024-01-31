function checkStyles() {
    const width = window.innerWidth;
  
    if (width < 760) {
        
        document.querySelector('.changed-container').innerHTML = `
                <img src="images/desktop/image-transform.jpg" alt="">
        `;

        document.querySelector('.changed-img-cont').innerHTML = `
                <div class="text">
                    <h1 class="heading">Transform your <br> brand</h1>
                    <p class="subtext">
                        We are a full-service creative agency <br> specializing in helping brands grow fast.<br> Engage your clients through compelling<br>visuals that do most of the marketing for<br> you.
                    </p>
                    <button class="transform-button">LEARN MORE</button>

                </div>
        `


        document.querySelector('.changed-standout-text').innerHTML = `
            <h1 class="heading">Stand out to the <br> right audience</h1>
            <p class="subtext standout-subtext">
                Using a collaborative formula of <br>designers, reseachers, photographers,<br>videographers, and copywriters, we'll<br>build and extend your brand in digital<br> places.
            </p>
            <button class="standout-button">
                LEARN MORE
            </button>
        `

        document.querySelector('.right').innerHTML =   `
            <button aria-label="menu-button" class="menu-button">
                <img src="images/icon-hamburger.svg" alt="" class="menu-icon">
            </button>
        `
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
        document.querySelector('.changed-container').innerHTML = `
        <div class="text">
        <h1 class="heading">Transform your <br> brand</h1>
        <p class="subtext transform-subtext">
            We are a full-service creative agency specializing in <br>helping brands grow fast. Engage your clients through <br> compelling visuals that do most of the marketing for you.
        </p>
        <button class="transform-button">LEARN MORE</button>

    </div>        `;

    document.querySelector('.changed-img-cont').innerHTML = `
    <img src="images/desktop/image-transform.jpg" alt="">

`

        document.querySelector('.changed-standout-text').innerHTML = `
            <h1 class="heading">Stand out to the right <br>audience</h1>
            <p class="subtext standout-subtext">
                Using a collaborative formula of designers, reseachers,<br> photographers, videographers, and copywriters, we'll<br>build and extend your brand in digital places.
            </p>
            <button class="standout-button">
                LEARN MORE
            </button>
        `

        document.querySelector('.right').innerHTML =   `
        <p class="menus">About</p>
        <p class="menus">Services</p>
        <p class="menus">Projects</p>

        <button class="contact">CONTACT</button>
    `

    }
}

checkStyles();


window.addEventListener('resize', () => {
    checkStyles();
});

// let menu = document.querySelector('.m-menu');

// let isOn = false;
// menu.addEventListener('click', () => {

//     if (!isOn) {
//         document.querySelector('.mobile-menu').style.display = 'initial';
//         isOn = true;
        
//     } else {
//         document.querySelector('.mobile-menu').style.display = 'none'
//         isOn = false;
//     }

//     console.log(isOn)
// })
