// Menu section
var menu = document.getElementById('menu');

// api variables
var apiRequest;
var url = 'https://entree-s18.herokuapp.com/v1/menu';

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
        // Print description of each menu item on a new line
        for (var item in response.menu_items) {
            var node = document.createElement('li');
            var menuArray = response.menu_items[item].description;
            var textnode = document.createTextNode(menuArray);
            console.log(textnode);
            node.appendChild(textnode);
            menu.appendChild(node);
        }
    }
}
getMenu();


// console.log(response.menu_items[0].description);
// console.log(response.menu_items[1]);
