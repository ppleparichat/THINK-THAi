const navBtn = document.getElementById("nav-click");
const closeBtn = document.getElementById("nav-close");
const navPopup = document.querySelector(".mobile-container");

navBtn.addEventListener("click", () => {
  console.log("open");
  navPopup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  console.log("close");
  navPopup.classList.remove("show");
});

// Add an event listener to close the navigation when a navigation item is clicked
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navPopup.classList.remove("show");
  });
});




const progressEl = document.querySelector(".progress");
window.onscroll = () => scrollProgress();

function scrollProgress() {
  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const percentage = (scrollTop / pageHeight) * 100;
  progressEl.style.visibility = "visible";
  progressEl.style.width = percentage + "%";
}




const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTopFunc);

function showBtn() {
  let pageHeight = rootEl.scrollHeight - rootEl.clientHeight;
  let result = rootEl.scrollTop / pageHeight;

  if (result > 0.3) {
    scrollBtn.classList.add("showBtn");
  } else {
    scrollBtn.classList.remove("showBtn");
  }
}

function scrollToTopFunc() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', handleSubmit);
  
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formBody = new URLSearchParams(formData).toString();
  
    const response = await fetch('https://formspree.io/f/xdovbnnq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    });
  
    if (response.ok) {
      alert('Thank you for your message!');
      form.reset();
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }
  

  // JavaScript for testimonial slider functionality
const testimonialSlider = document.querySelector('.testimonial-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Event listeners for previous and next buttons
prevButton.addEventListener('click', scrollSlider.bind(null, 'prev'));
nextButton.addEventListener('click', scrollSlider.bind(null, 'next'));

// Function to scroll the slider
function scrollSlider(direction) {
  const testimonialWidth = testimonialSlider.offsetWidth;
  const scrollAmount = direction === 'prev' ? -testimonialWidth : testimonialWidth;
  testimonialSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

