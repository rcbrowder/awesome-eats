// Menu section
var homeButton = document.getElementById('homeButton')
var menuButton = document.getElementById('menuButton');
var infoButton = document.getElementById('infoButton');
var contactButton = document.getElementById('contactButton');
var home = document.getElementById('home');
var menu = document.getElementById('menu');
var contact = document.getElementById('contact');
var about = document.getElementById('about');
var isDone = false;

// api variables
var apiRequest;
var url = 'https://entree-s18.herokuapp.com/v1/menu';


function main() {
		menuButton.onclick = getMenu;
        homeButton.onclick = displayHome;
        contactButton.onclick = displayContact;
        aboutButton.onclick = displayAbout;
}

function displayAbout() {
    about.style.display = 'block';
    home.style.display = 'none';
    menu.style.display = 'none';
    contact.style.display = 'none';
}

function displayHome() {
    home.style.display = 'block';
    menu.style.display = 'none';
    contact.style.display = 'none';
    about.style.display = 'none'
}

function displayContact() {
    contact.style.display = 'block';
    menu.style.display = 'none';
    home.style.display = 'none';
    about.style.display = 'none';
}

function getMenu() {
    apiRequest = new XMLHttpRequest();
    apiRequest.onload = displayMenu;
    apiRequest.open('get', url, true);
    apiRequest.send();

}

function displayMenu() {
    if (apiRequest.statusText == 'OK') {
        var response = JSON.parse(apiRequest.responseText);
        console.log(response.menu_items);
        about.style.display = 'none';
        home.style.display = 'none';
        contact.style.display = 'none';
        menu.style.display = 'block';
        // Print description of each menu item on a new line
        if (isDone == false) {
            for (var item in response.menu_items) {
                var node = document.createElement('li');
                var menuArray = response.menu_items[item].description;
                var textnode = document.createTextNode(menuArray);
                console.log(textnode);
                node.appendChild(textnode);
                menu.appendChild(node);
                isDone = true;
            }
        }
    }
}

main();

// console.log(response.menu_items[0].description);
// console.log(response.menu_items[1]);
