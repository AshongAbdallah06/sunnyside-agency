console.log("HI")


function checkStyles() {
    const width = window.innerWidth;
  
    if (width < 700) {
        document.querySelector('.right-side-container').innerHTML = `
            <img src="images/icon-hamburger.svg" class="m-menu">
        `  

        document.querySelector('.t-container').innerHTML = `
            <div class="image">
                <img src="images/desktop/image-transform.jpg" alt="" class="image">
            </div>
            <div class="transform">
                <h1 class="heading">Transform your <br> brand</h1>

                <div class="message">
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </div>

                <button class="t-learn-more learn-more">LEARN MORE</button>
            </div>
        `
        // alert("Heillo")
    } else {
        document.querySelector('.right-side-container').innerHTML = `
            <div class="right-side">
                <p class="about">About</p>
                <p class="services">Services</p>
                <p class="projects">Projects</p>
            <div>
            
            <button class="contact-button">CONTACT</button>
        `

        document.querySelector('.t-container').innerHTML = `
            <div class="transform">
                <h1 class="heading">Transform your <br> brand</h1>

                <div class="message">
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </div>

                <button class="t-learn-more learn-more">LEARN MORE</button>
            </div>

            <div class="image">
                <img src="images/desktop/image-transform.jpg" alt="" class="image">

            </div>
        `
    }
}

checkStyles();


window.addEventListener('resize', () => {

    checkStyles();


});

let menu = document.querySelector('.m-menu');

let isOn = false;
menu.addEventListener('click', () => {

    if (!isOn) {
        document.querySelector('.mobile-menu').style.display = 'initial';
        isOn = true;
        
    } else {
        document.querySelector('.mobile-menu').style.display = 'none'
        isOn = false;
    }

    console.log(isOn)
})
