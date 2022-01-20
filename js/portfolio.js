const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-img');
const portfolioBtnWrapper = document.querySelector('.portfolio-btn-wrapper');


/*
function changeImage() {
    
        for (let i = 0; i < portfolioBtn.length; i++) {
            let dataValue = portfolioBtn[i].getAttribute("data-season");
            portfolioBtn[i].classList.remove('active-btn');
            portfolioBtn[i].addEventListener('click', function () {
                portfolioImages.forEach((img, index) => img.src = `assets/img/portfolio/${dataValue}/${index + 1}.jpg`);
                portfolioBtn[i].classList.add('active-btn');
                
            });
        }
        
}
changeImage();
*/

portfolioBtnWrapper.addEventListener('click', changeImage);

function changeImage(event) {
    if(event.target.classList.contains('portfolio-btn')) {
        for (let i = 0; i < portfolioBtn.length; i++) {
            let dataValue = portfolioBtn[i].getAttribute("data-season");
            portfolioBtn[i].classList.remove('active-btn');
            
            portfolioBtn[i].addEventListener('click', function () {
                portfolioImages.forEach((img, index) => img.src = `assets/img/portfolio/${dataValue}/${index + 1}.jpg`);
                            
            });
            event.target.classList.add('active-btn');

        }
    }
}


