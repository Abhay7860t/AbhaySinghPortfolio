

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

// To send the proper response to w3forms
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from resetting immediately

  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  // Debugging step: log the form data
  /*
  for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]); // Log the data to ensure it's being captured
  }
      */

  try {
      const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
      });

      const result = await response.json();
      
      // Debugging step: log the response from Web3Forms
      // console.log(result);

      if (result.success) {
          // Reset the form only after the submission is confirmed
          form.reset();
          //alert('Your message has been sent successfully!');
      } 
  } catch (error) {
     // console.error('Error:', error);
     // alert('There was an error submitting the form. Please try again.');
  }
}

