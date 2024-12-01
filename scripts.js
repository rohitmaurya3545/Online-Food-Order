let order = [];
let totalPrice = 0;
let wishlist = [];
let feedbacks = [];

function searchItems() {
    let searchQuery = document.getElementById('search-bar').value.toLowerCase();
    let foodItems = document.querySelectorAll('.food-item');

    foodItems.forEach(item => {
        let foodName = item.querySelector('p').textContent.toLowerCase();
        if (foodName.includes(searchQuery)) {
            item.style.display = 'flex';  
        } else {
            item.style.display = 'none';  
        }
    });
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const validEmail = "admin@gmail.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
        document.getElementById("login").style.display = "none";

        document.getElementById("main-content").style.display = "block";
        document.body.style.overflow = "auto";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

document.getElementById('search-button').addEventListener('click', searchItems);
document.getElementById('search-bar').addEventListener('input', searchItems);

function addToOrder(food, price) {
    order.push({ food, price });
    totalPrice += price;
    updateOrderSummary();
}

function addToWishlist(food) {
    wishlist.push(food);
    updateWishlist();
}

function updateOrderSummary() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.food} - ₹${item.price}`;
        orderList.appendChild(li);
    });
    document.getElementById('total-price').textContent = `₹${totalPrice}`;
}

function updateWishlist() {
    const wishlistList = document.getElementById('wishlist-list');
    wishlistList.innerHTML = '';
    wishlist.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        wishlistList.appendChild(li);
    });
}

function previewOrder() {
    if (order.length === 0) {
        alert('Your order is empty!');
        return;
    }

    const previewList = document.getElementById('preview-list');
    previewList.innerHTML = '';
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.food} - ₹${item.price}`;
        previewList.appendChild(li);
    });
    document.getElementById('preview-total-price').textContent = `₹${totalPrice}`;

    const address = document.getElementById('address-text').value.trim();
    if (address === '') {
        alert('Please enter your delivery address.');
        return;
    }
    document.getElementById('preview-address').textContent = address;
    document.getElementById('order-preview').style.display = 'block';
}

function placeOrder() {
    alert(`Order placed successfully! Total cost: ₹${totalPrice}`);
    order = [];
    totalPrice = 0;
    updateOrderSummary();
    document.getElementById("address-text").value = "";
    alert("Order placed successfully!");
    document.getElementById('order-preview').style.display = 'none';
}

function submitFeedback() {
    const feedbackText = document.getElementById('feedback-text').value;
    if (feedbackText.trim() !== '') {
        feedbacks.push(feedbackText);
        document.getElementById('feedback-text').value = '';
        updateFeedbackList();
    } else {
        alert('Please enter your feedback.');
    }
}

function updateFeedbackList() {
    const feedbackList = document.getElementById('feedback-list');
    feedbackList.innerHTML = '';
    feedbacks.forEach(feedback => {
        const li = document.createElement('li');
        li.textContent = feedback;
        feedbackList.appendChild(li);
    });
}
