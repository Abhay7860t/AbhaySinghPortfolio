

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// For toggle navbar
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

async function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from resetting immediately

  const form = document.getElementById('contactForm');
  const formData = new FormData(form);
  const messageContainer = document.querySelector('.formMessage'); // Find the message container

  try {
      const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
      });

      const result = await response.json();

      if (result.success) {
          form.reset(); // Reset the form only if the submission is successful
          messageContainer.style.display = 'block';
          messageContainer.style.color = 'white';
          messageContainer.textContent = 'Your message has been sent successfully 😊';
      } else {
          messageContainer.style.display = 'block';
          messageContainer.style.color = 'red';
          messageContainer.textContent = 'There was an error sending your message. Please try again.';
      }
  } catch (error) {
      messageContainer.style.display = 'block';
      messageContainer.style.color = 'red';
      messageContainer.textContent = 'There was an error submitting the form. Please try again.';
  }

  // Hide message after 5 seconds
  setTimeout(() => {
      messageContainer.style.display = 'none';
  }, 3000);
}
