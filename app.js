// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// User registration form toggle
const loginBtn = document.getElementById('loginBtn');
const registrationForm = document.getElementById('registrationForm');

loginBtn.addEventListener('click', () => {
    registrationForm.classList.toggle('hidden');
});

// Save user information to Firebase
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(registrationForm);
    const userData = Object.fromEntries(formData.entries());

    db.collection('users').add(userData)
    .then(() => {
        alert('User information saved successfully!');
        registrationForm.reset();
    })
    .catch((error) => {
        console.error('Error adding user information: ', error);
    });
});

// Handle form submission for adding volunteer opportunities
const addOpportunityForm = document.getElementById('addOpportunityForm');

addOpportunityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addOpportunityForm);
    const opportunityData = Object.fromEntries(formData.entries());

    db.collection('opportunities').add(opportunityData)
    .then(() => {
        alert('Volunteer opportunity added successfully!');
        addOpportunityForm.reset();
    })
    .catch((error) => {
        console.error('Error adding volunteer opportunity: ', error);
    });
});

// Initialize Google Maps
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 }, // Default center (can be updated based on user location)
        zoom: 8,
    });

   //adding map
}
