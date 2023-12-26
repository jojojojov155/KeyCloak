/*
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    const displayText = document.getElementById('displayText');

    button.addEventListener('click', () => {
        displayText.textContent = 'Button clicked!';
    });
});
*/

/*
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('myInput');
    inputField.addEventListener('change', function() {
        // Handle input change event
        console.log(inputField.value);
        // Optionally, make an AJAX request to Spring Boot backend
    });
});*/

var keycloak = new Keycloak({
    url: 'http://localhost:8081/auth',
    realm: 'external',
    clientId: 'external-client'
});

keycloak.init({ onLoad: 'login-required' }).then(function(authenticated) {
    if(authenticated) {
        console.log("User is authenticated");
    } else {
        console.warn("User is not authenticated");
    }
}).catch(function() {
    console.error("Authentication failed");
});