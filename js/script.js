const arrow = document.querySelector('.arr_button');
arrow.addEventListener('click', scrollPhoto)

function scrollPhoto(event) {
    let photos = document.querySelectorAll('.img')
    console.log(photos)
    let pos = 0;
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].classList.length == 2) {
            if (photos[i].classList[1] == '_active-1')
                pos = i;
        }
    }

    if (pos == photos.length - 1) {
        photos[pos].classList.remove('_active-1');
        photos[0].classList.add('_active-1');

        photos[0].classList.remove('_active-2');
        photos[1].classList.add('_active-2');

        photos[1].classList.remove('_active-3');
        photos[2].classList.add('_active-3');
    }
    else {
        photos[pos].classList.remove('_active-1');
        photos[pos + 1].classList.add('_active-1');
        if (pos + 1 == photos.length - 1) {
            photos[pos + 1].classList.remove('_active-2')
            photos[0].classList.add('_active-2')

            photos[0].classList.remove('_active-3')
            photos[1].classList.add('_active-3')
        } else {
            photos[pos + 1].classList.remove('_active-2')
            photos[pos + 2].classList.add('_active-2')
            if (pos + 2 == photos.length - 1) {
                photos[pos + 2].classList.remove('_active-3')
                photos[0].classList.add('_active-3')
            } else {
                photos[pos + 2].classList.remove('_active-3')
                photos[pos + 3].classList.add('_active-3')
            }
        }
    }
}

const photos_lenta = document.querySelectorAll('.img');
const photos_main = document.querySelectorAll('.content__images--main img');
console.log(photos_lenta);
photos_lenta.forEach(element => {
    element.addEventListener('click', changeMainPhoto);
});


function changeMainPhoto(event) {
    photos_main.forEach(element => {
        element.classList.remove('main_active')
    });
    if (event.target.alt == 'фото-1') {
        photos_main[0].classList.add('main_active')
    }
    if (event.target.alt == 'фото-2') {
        photos_main[1].classList.add('main_active')
    }
    if (event.target.alt == 'фото-3') {
        photos_main[2].classList.add('main_active')
    }
}

if (window.innerWidth < 375) {
    let details = document.querySelector('.content__details');
    details.addEventListener('click', showDetails);

    photos_main.forEach(element => {
        element.addEventListener('click', swapPhoto)
    });
}

function swapPhoto(event) {
    for (let i = 0; i < photos_main.length; i++) {
        if (photos_main[i].classList[0] == 'main_active')
            pos = i;
    }

    event.target.classList.remove('main_active');
    if (event.clientX > window.innerWidth / 2) {
        if (pos == photos_main.length - 1)
            photos_main[0].classList.add('main_active')
        else
            photos_main[pos + 1].classList.add('main_active')
    }
    else {
        if (pos == 0)
            photos_main[photos_main.length - 1].classList.add('main_active')
        else
            photos_main[pos - 1].classList.add('main_active')
    }
}

function showDetails(event) {
    let details_info = document.querySelector('.details');
    details_info.classList.toggle('details_active');
    event.target.classList.toggle('arr_transform');
}