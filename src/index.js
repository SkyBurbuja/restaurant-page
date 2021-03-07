
import pageLoad from './page-load';
import menuLoad from './menu';
import contactLoad from './contact';

pageLoad();

const homeReload = (e) => {
    const parent = document.getElementById('content');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    pageLoad();

    const menuListener = document.querySelector('#menuTab');
    menuListener.addEventListener('click',menuReload);

    const contactListener = document.querySelector('#contactTab');
    contactListener.addEventListener('click',contactReload);
    
}

const menuReload = (e) => {
    const parent = document.getElementById('content');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    menuLoad();

    const homeListener = document.querySelector('#homeTab');
    homeListener.addEventListener('click',homeReload);
    const contactListener = document.querySelector('#contactTab');
    contactListener.addEventListener('click',contactReload);
    
}

const contactReload = (e) => {
    const parent = document.getElementById('content');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    contactLoad();

    const menuListener = document.querySelector('#menuTab');
    menuListener.addEventListener('click',menuReload);

    const homeListener = document.querySelector('#homeTab');
    homeListener.addEventListener('click',homeReload);

    
}

const homeListener = document.querySelector('#homeTab');
homeListener.addEventListener('click',homeReload);
const menuListener = document.querySelector('#menuTab');
menuListener.addEventListener('click',menuReload);
const contactListener = document.querySelector('#contactTab');
contactListener.addEventListener('click',contactReload);
