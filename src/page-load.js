const pageLoad = (function () {
    //Initiate and load header
    const headerLoad = () => {
        const header = document.createElement('header');
        header.setAttribute('id', 'restarauntHeader');
        const name = document.createElement('h1');
        name.textContent = 'Big Fam BBQ';
        header.appendChild(name);

        document.getElementById('content').appendChild(header);
    }
    //Initiate and load image
    const imgLoad = () => {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('id', 'imgContainer');
        const image = document.createElement('img');
        image.setAttribute('id','kebabPicture');
        image.setAttribute('src','pexels-samer-daboul-2233729.jpg');
        image.setAttribute('alt','Kebabs on a grill');
        imageContainer.appendChild(image);

        document.getElementById('content').appendChild(imageContainer);
    }
    //Initiate and load page content
    const contentLoad = () => {
        const aboutUs = document.createElement('div');
        aboutUs.setAttribute('id','aboutUs');
        aboutUs.innerHTML='Big Fam BBQ is the best stand i\'ve ever been to! <br> The food is delicious and the staff are professional and friendly.<br>';
        

        document.getElementById('content').appendChild(aboutUs);
    }


     headerLoad();
     imgLoad();
     contentLoad();
    
})();

export {pageLoad};