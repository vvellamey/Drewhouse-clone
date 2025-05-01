const shop_ = document.getElementById('shop');
const newAr_ = document.getElementById('newarr_section');
const scrap_ = document.getElementById('scrap_section');
const garage_ = document.getElementById('garage_section');
const nav_ = document.getElementById('nav');
const header_ = document.getElementById('header');
const prefooter_ = document.getElementById('pre-footer');
const addCart_  = document.getSelection('addCart');
const showLogin_ = document.getElementById('showLogin');
const backshop_ =document.getElementById('backShop');

function showShop(){
    shop_.style.display = 'flex';
    cover.style.display ='block';
    nav_.style.display = "flex";
    header_.style.display = "flex"
    prefooter_.style.display = "block"
    hideNewar();
    hideScrap();
    hideGarage();
    hideLogin();
    return false;
}


function showNewar(){
    newAr_.style.display = 'flex';
   
    hideCover();
    hideShop();
    hideScrap();
    hideGarage();
    hideLogin();
    return false;
}


function showScrap(){
    scrap_.style.display = 'block';
    hideCover();
    hideNewar();
    hideShop();
    hideLogin();
    return false;
}


function showGarage(){
    garage_.style.display = 'block';
    header_.style.display = 'none';
    prefooter_.style.display = 'none';
    hideNewar();
    hideScrap();
    hideShop();
    hideCover();
    hideLogin();
   
    return false;
}

function showLogin(){
    showLogin_.style.display = 'block';
    nav_.style.display = "none"
    hideNewar();
    hideCover();
    hideShop();
    hideScrap();
    hideGarage();
}

function hideLogin(){
    showLogin_.style.display = 'none'
}

function hideShop(){
    shop_.style.display = 'none'
}

function hideNewar(){
    newAr_.style.display = 'none'
}

function hideScrap(){
    scrap_.style.display = 'none'
}

function hideGarage(){
    garage_.style.display = 'none'
}



function hideCover(){
cover.style.display = 'none';
}


// ADD TO CART

function addCart() {
    const quantity = prompt("Enter quantity:");
    if (quantity > 0) {
      alert(quantity + " items added to cart!");
    } else {
      alert("Invalid quantity.");
    }
  }


// LOGIN





const Validemail = "admin@gmail.com";
const Validpassword = "admin";

    function login(event) {
        event.preventDefault();
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        if (Validemail == email.value.trim() && Validpassword == password.value.trim()) {
            password.value = "";
            shop_.style.display = 'flex';
            cover.style.display ='block';
            nav_.style.display = "flex";
            header_.style.display = "flex"
            hideNewar();
            hideScrap();
            hideGarage();
            hideLogin();
            alert('Successful login')
           
        } else {
            alert('Invalid username or password')
           
        }
    }


    function subscribe() {
        alert("Thank you for subscribing!")
    }
    
    function logout() {
        let out = confirm("Log out your account?")
        if(out) {
            showLogin();
        }
    }
    