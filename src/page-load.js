let pageLoad = () => {
    const content = document.getElementById('content');
    const bodyHolderHome = document.createElement('div');
    bodyHolderHome.setAttribute('id','bodyHolderHome');

    const homeTab = (tabBar) => {
        const home = document.createElement('div');
        home.setAttribute('id', 'homeTab');
        home.setAttribute('class', 'tabButton');
        home.textContent = 'HOME';
        return home;
    }

    const menuTab = () => {
        const menu = document.createElement('div');
        menu.setAttribute('id', 'menuTab');
        menu.setAttribute('class', 'tabButton');
        menu.textContent = 'MENU';

        return menu;
    }

    const contactTab = () => {
        const contact = document.createElement('div');
        contact.setAttribute('id', 'contactTab');
        contact.setAttribute('class', 'tabButton');
        contact.textContent = 'CONTACT';

        return contact;
    }
    const header = document.createElement('header');
    header.setAttribute('id', 'restarauntHeader');
    const name = document.createElement('h1');
    name.textContent = 'Big Fam BBQ';
    header.appendChild(name);

    content.appendChild(header);


    const tabBar = document.createElement('div');
    tabBar.setAttribute('id', 'tabBar');
    tabBar.appendChild(homeTab());
    tabBar.appendChild(menuTab());
    tabBar.appendChild(contactTab());

    content.appendChild(tabBar);



    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'imgContainer');
    const image = document.createElement('img');
    image.setAttribute('id', 'kebabPicture');
    image.setAttribute('src', 'pexels-samer-daboul-2233729.jpg');
    image.setAttribute('alt', 'Kebabs on a grill');
    imageContainer.appendChild(image);

    bodyHolderHome.appendChild(imageContainer);

    const aboutUs = document.createElement('div');
    aboutUs.setAttribute('id', 'aboutUs');
    aboutUs.innerHTML = 'Big Fam BBQ is the best stand i\'ve ever been to! <br> The food is delicious and the staff are professional and friendly.<br>';


    bodyHolderHome.appendChild(aboutUs);

    content.appendChild(bodyHolderHome);

};

export default pageLoad;