const button = document.getElementById('myButton');
const box = document.getElementById("hover");
const output = document.getElementById("output");
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// Button click 
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  output.textContent = `You pressed: ${e.key}`;
});

// Double-click secret action
box.addEventListener("dblclick", () => {
  output.textContent = "🕵️ Secret double-click detected!";
  box.style.backgroundColor = "gold";
});

// Long press (press and hold for 1s)
let pressTimer;
box.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    output.textContent = "⏳ Secret long-press detected!";
    box.style.backgroundColor = "purple";
  }, 1000);
});

box.addEventListener("mouseup", () => clearTimeout(pressTimer));
box.addEventListener("mouseleave", () => clearTimeout(pressTimer));

 // Button interaction
    const magicBtn = document.getElementById('magicBtn');
    magicBtn.addEventListener('click', () => {
      magicBtn.classList.toggle('clicked');
      magicBtn.textContent = magicBtn.classList.contains('clicked') ? 'Clicked!' : 'Click Me!';
    });

    // Gallery/slideshow
    const galleryImages = document.querySelectorAll('#gallery img');
    let currentSlide = 0;
    setInterval(() => {
      galleryImages[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % galleryImages.length;
      galleryImages[currentSlide].classList.add('active');
    }, 3000);

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        tabContents.forEach(c => c.classList.remove('active'));
        document.getElementById(`tab-${tabId}`).classList.add('active');
      });
    });

    function validateName() {
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameInput.classList.add('invalid');
        return false;
      } else {
        nameError.textContent = '';
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        return true;
      }
    }

    function validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email';
        emailInput.classList.add('invalid');
        return false;
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
        return true;
      }
    }

    function validatePassword() {
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordInput.classList.add('invalid');
        return false;
      } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('invalid');
        passwordInput.classList.add('valid');
        return true;
      }
    }

    function checkFormValidity() {
      const isFormValid = validateName() && validateEmail() && validatePassword();
      submitBtn.disabled = !isFormValid;
      return isFormValid;
    }

    nameInput.addEventListener('input', () => {
      validateName();
      checkFormValidity();
    });

    emailInput.addEventListener('input', () => {
      validateEmail();
      checkFormValidity();
    });

    passwordInput.addEventListener('input', () => {
      validatePassword();
      checkFormValidity();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (checkFormValidity()) {
        successMessage.textContent = '🎉 Form submitted successfully!';
        form.reset();
        [nameInput, emailInput, passwordInput].forEach(input => {
          input.classList.remove('valid');
        });
        submitBtn.disabled = true;
      }
    });
