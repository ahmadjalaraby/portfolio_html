// ===================== Services TOGGLE
const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');

const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(item => "<p>" + item + "</p>").join('')}
    `;
};

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    });
};

servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        const serviceType = item.classList[1];
        getService(serviceType);
        removeActiveClass();
        item.classList.add('active');
    });
});


getService('frontend');



// ===================== MIX IT UP (Projects Section)

const containerEL = document.querySelector('.projects__container');
var mixer = mixitup(containerEL, {
    animation: {
        enable: false,
    }
});
mixer.filter('*');

// Get filters buttons
const projectFilterButtons = document.querySelectorAll('.projects__categories li');
projectFilterButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClassFromProjectFilters();
        item.classList.add('active');
    });
});

const removeActiveClassFromProjectFilters = () => {
    projectFilterButtons.forEach(button => {
        button.classList.remove('active');
    });
};


// ===================== Swiper (Testimonials Section)

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 30,
});


// ===================== Navbar Toggle (Navbar)

const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');


const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

navOpenBtn.addEventListener('click', openNavHandler);

const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navCloseBtn.addEventListener('click', closeNavHandler);


// close nav menu on click of nav link on small screens
const navItems = navMenu.querySelectorAll('a');

if (window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler);
    });
}



// ===================== Theme Toggle (Dark | Light --> Theme)
const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass) {
        bodyClass = 'dark';
        document.body.className = bodyClass;
        // change toggle icon
        themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
    } else {
        bodyClass = '';
        document.body.className = bodyClass;
        // change toggle icon
        themeBtn.innerHTML = '<i class="uil uil-moon"></i>';

    }
});