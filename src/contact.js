let contactLoad = () => {
    
    const content = document.getElementById('content');
    const bodyHolderContact = document.createElement('div');
    bodyHolderContact.setAttribute('id','bodyHolderContact');

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

    const contactInformation = document.createElement('div');

    const phoneNumber = document.createElement('div');
    phoneNumber.setAttribute('id','phoneNumber');

    const address = document.createElement('div');
    address.setAttribute('id','address');

    const paymentInformation = document.createElement('div');
    paymentInformation.setAttribute('id','paymentInformation');

    phoneNumber.textContent = '(512)-458-1256';
    address.textContent = 'BLOCK 34 LOT 6'
    paymentInformation.textContent = 'GCASH ACCEPTED: 09274002080'

    contactInformation.appendChild(phoneNumber);
    contactInformation.appendChild(address);
    contactInformation.appendChild(paymentInformation);

    bodyHolderContact.appendChild(contactInformation);
    content.appendChild(bodyHolderContact);
}

export default contactLoad;