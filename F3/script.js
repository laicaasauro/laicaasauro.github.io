
if (document.getElementById("contactForm")) {
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const response = document.getElementById("response");
        
        const root = document.documentElement;
        root.style.setProperty('--accent-color', '#e1bee7'); 

        response.textContent = `Thank you, ${name}! We received your message.`;
        response.className = "success-text";
        this.reset();
    });
}

function loginUser() {
    localStorage.setItem("userLoggedIn", "true");
}

function logoutUser() {
    localStorage.removeItem("userLoggedIn");
}

function toggleTheme() {
    const root = document.documentElement;
    const currentBg = getComputedStyle(root).getPropertyValue('--bg-light').trim();

    if (currentBg === '#fcfaff') {
        root.style.setProperty('--bg-light', '#361d32');
        root.style.setProperty('--text-main', '#ffffff');     
        root.style.setProperty('--text-muted', '#e1bee7');   
        root.style.setProperty('--white', '#4a344d');          
        root.style.setProperty('--primary-color', '#1a0f18');  
    } 
    else {
        root.style.setProperty('--bg-light', '#fcfaff');
        root.style.setProperty('--text-main', '#4a344d');
        root.style.setProperty('--text-muted', '#6d4c7d');
        root.style.setProperty('--white', '#ffffff');
        root.style.setProperty('--primary-color', '#361d32');
    }
}

