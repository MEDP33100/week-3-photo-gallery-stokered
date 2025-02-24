const photos = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
];

/*

----------STEP ONE-------------

*/ 

// manipulate DOM to get gallery element 
const newGallery = document.getElementById('gallery');

// mistakes lol

/* use forEach method to go through every object in the photos array
 => runs through every photo */
// photos.forEach(photo => {
//     /* create a new img element for each photo
//      creates a new img element in DOM */
//     const img = document.createElement('img');
//     /* set src and alt for each img element in the array
//     this loops over the photos array and automatically creates an img element
//     urls are changeable without having to rewrite code */
//     img.src = photo.url;
//     // filtering images by type (ie nature)
//     img.alt = photo.type; 
//     /* append the img element to gallery container 
//     and return the newly appended node */ 
//     newGallery.appendChild(img);
// });

/* 
-------------- STEP TWO ---------------
*/

// var that tells how many photos to be visible
let currentIndex = 6;

function loadMore() {
    newGallery.innerHTML = "";
    /* slice returns a shallow copy of a portion of an array
    into a new array
    this slice is from 0-currentIndex which is set at 6
    so only 6 imgs show at a time */ 
    const photosToShow = photos.slice(0, currentIndex);
    
    photosToShow.forEach(photo => {
        // creating img element
        const img = document.createElement('img');
        // transferable urls
        img.src = photo.url;
        // sorting types, ie 'nature'
        img.alt = photo.type;
        // appends the element created in doc.createEl 
        newGallery.appendChild(img);
    }); 
}

// call loadMore function
loadMore(); 

// call all button
const btnAll = document.getElementById('all');

// add eventlistener for user click
btnAll.addEventListener('click', function() {
    /* when the loadMore function slices 
    the array, it takes all available photos */
    currentIndex = photos.length;
    loadMore();
});

const btnLoadMore = document.getElementById('loadMore');

btnLoadMore.addEventListener('click', function() {
    currentIndex += 6;
    loadMore(); 
}); 

const btnNature = document.getElementById('nature');
const btnCity = document.getElementById('city');
const btnAnimals = document.getElementById('animals');

btnNature.addEventListener('click', function() {
    //clear
    newGallery.innerHTML = "";
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].type === "nature") {
            const img = document.createElement('img');
            img.src = photos[i].url;
            img.alt = photos[i].type;
            newGallery.appendChild(img);
        }
    }
});

btnCity.addEventListener('click', function() {
    //clear
    newGallery.innerHTML = "";
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].type === "city") {
            const img = document.createElement('img');
            img.src = photos[i].url;
            img.alt = photos[i].type;
            newGallery.appendChild(img);
        }
    }
});

btnAnimals.addEventListener('click', function() {
    //clear
    newGallery.innerHTML = "";
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].type === "animals") {
            const img = document.createElement('img');
            img.src = photos[i].url;
            img.alt = photos[i].type;
            newGallery.appendChild(img);
        }
    }
});

/* 

the below code is not necessary to the assignment, i'm just 
learning how to use js
thought i'd tool around a bit

*/

function changeColors() {
    const buttonColor = document.querySelectorAll('.filter-buttons button');
    for (let i = 0; i < buttonColor.length; i++) {
        buttonColor[i].style.backgroundColor = 'purple';
    }
}

changeColors (); 

function loadColor () {
    const loadPink = document.querySelectorAll('.load-more button')
    for (let i=0; i < loadPink.length; i++) {
        loadPink[i].style.backgroundColor = 'pink';
    }
}

loadColor ();

const loadMoreBtn = document.querySelector('.load-more button');

/* classList.add adds css classes to a DOM element */

loadMoreBtn.addEventListener('mouseover', function() {
    loadMoreBtn.classList.add('hover-animate');
}); 

loadMoreBtn.addEventListener('mouseout', function() {
    loadMoreBtn.classList.remove('hover-animate');
});
