 let menuLoad = () => {

    const content = document.getElementById('content');

    const homeTab = (tabBar) => {
        const home = document.createElement('div');
        home.setAttribute('id','homeTab');
        home.setAttribute('class','tabButton');
        home.textContent = 'HOME';
        return home;
    }

    const menuTab = () => {
        const menu = document.createElement('div');
        menu.setAttribute('id','menuTab');
        menu.setAttribute('class','tabButton');
        menu.textContent = 'MENU';

        return menu;
    }

    const contactTab = () => {
        const contact = document.createElement('div');
        contact.setAttribute('id','contactTab');
        contact.setAttribute('class','tabButton');
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

    const menuItem = (newItem, price) => {
        const item = document.createElement('li');
        item.setAttribute('class','menuItem');
        item.textContent = newItem;
        const menuPrice = document.createElement('div');
        menuPrice.textContent = `P${price}`;
        item.appendChild(menuPrice);

        return item;
    }

    const menuGenerator = () => {
        const menuDisplay = document.createElement('div');
        const tableMenu = document.createElement('ul');

        tableMenu.appendChild(menuItem('BARBECUE',15));
        tableMenu.appendChild(menuItem('BONELESS BANGUS',100));
        tableMenu.appendChild(menuItem('ISAW MANOK',5));
        tableMenu.appendChild(menuItem('ISAW BABOY',10));
        tableMenu.appendChild(menuItem('ULO',10));
        tableMenu.appendChild(menuItem('DUGO',5));
        tableMenu.appendChild(menuItem('TENGA',15));

        document.getElementById('content').appendChild(tableMenu);

        return menuDisplay;
    }

    
        const aboutUs = document.createElement('div');
        aboutUs.setAttribute('id','menu');
        const menuDisplay = menuGenerator();
        aboutUs.appendChild(menuDisplay);
        

        content.appendChild(aboutUs);
    



};

export default menuLoad;
