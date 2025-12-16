window.addEventListener('scroll', () => {
  const header_wrapper = document.querySelector('.h-wrapper');

  if (window.scrollY >= 200) {
    header_wrapper.classList.add('scrolled');
  } else {
    header_wrapper.classList.remove('scrolled');
  }

  // if(window.innerWidth < 900) {
  //   if (window.scrollY >= 200) {
  //     header_wrapper.classList.add('scrolled');
  //   } else {
  //     header_wrapper.classList.remove('scrolled');
  //   }
  // } else {
  //   if (window.scrollY >= 300) {
  //     header_wrapper.classList.add('scrolled');
  //   } else {
  //     header_wrapper.classList.remove('scrolled');
  //   }
  // }
})

// const headerHeight = document.querySelector('.h-wrapper').offsetHeight;

// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();

//     const target = document.querySelector(link.getAttribute('href'));
//     if (!target) return;

//     const targetPosition =
//       target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

//     window.scrollTo({
//       top: targetPosition,
//       behavior: 'smooth'
//     });
//   });
// });

// Navigation
const navbar = document.querySelector('#nav');
document.querySelector('.bars').addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.add('show');
  document.body.classList.add('no-scroll');
})

document.querySelector('.xmark').addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.remove('show');
  document.body.classList.remove('no-scroll');
})

navbar.querySelectorAll('ul li').forEach(link => {
  link.addEventListener('click', (e) => {
    navbar.classList.remove('show');
    document.body.classList.remove('no-scroll');
  })
})

document.querySelector('#banner .arrow-down').addEventListener('click', (e) => {
  e.preventDefault();
  const aboutMe = document.querySelector('#about-me');

  aboutMe.scrollIntoView({
    behavior: 'smooth'
  })
})

const headerWrapper = document.querySelector('.h-wrapper');
const particleJS = document.querySelector('#particles-js');
const bannerSection = document.querySelector('.content-banner');
const aboutSection = document.querySelector('.about-container');
const workSection = document.querySelector('.work-container');
const skillsSection = document.querySelector('.skills-container');
const projectsSection = document.querySelector('.projects-container');
const contactSection = document.querySelector('.contact-container');
// Dark Mode Toggle
document.querySelector('.d-mode-toggle input').addEventListener('change', (e) => {

  if (!e.target.checked) {
    headerWrapper.classList.add('light-mode');
    particleJS.classList.add('light-mode');
    bannerSection.querySelector('.cb-left a').classList.add('light-mode');
    aboutSection.classList.add('light-mode');
    aboutSection.querySelector('.ac-right').classList.add('light-mode');
    aboutSection.querySelector('.ac-right p').classList.add('light-mode');
    workSection.classList.add('light-mode');
    workSection.querySelector('.wc-left h4').classList.add('light-mode');
    workSection.querySelectorAll('.texts .job-lists h5').forEach(i => {i.classList.add('light-mode')});
    workSection.querySelectorAll('.texts .job-lists h6').forEach(i => {i.classList.add('light-mode')});
    workSection.querySelectorAll('.texts .job-lists ul').forEach(i => {i.classList.add('light-mode')});
    skillsSection.classList.add('light-mode');
    skillsSection.querySelectorAll('.skills-icon .icon').forEach(i => {i.classList.add('light-mode')});
    projectsSection.classList.add('light-mode');
    projectsSection.querySelector('.projects-container h4').classList.add('light-mode');
    projectsSection.querySelector('.projects-container h5').classList.add('light-mode');
    contactSection.classList.add('light-mode');
    contactSection.querySelector('.contact-me a').classList.add('light-mode');
    // contactSection.querySelector('.contact-me a:hover').classList.add('light-mode');
  } else {
    headerWrapper.classList.remove('light-mode');
    particleJS.classList.remove('light-mode');
    bannerSection.querySelector('.cb-left a').classList.remove('light-mode');
    aboutSection.classList.remove('light-mode');
    aboutSection.querySelector('.ac-right').classList.remove('light-mode');
    aboutSection.querySelector('.ac-right p').classList.remove('light-mode');
    workSection.classList.remove('light-mode');
    workSection.querySelector('.wc-left h4').classList.remove('light-mode');
    workSection.querySelectorAll('.texts .job-lists h5').forEach(i => {i.classList.remove('light-mode')});
    workSection.querySelectorAll('.texts .job-lists h6').forEach(i => {i.classList.remove('light-mode')});
    workSection.querySelectorAll('.texts .job-lists ul').forEach(i => {i.classList.remove('light-mode')});
    skillsSection.classList.remove('light-mode');
    skillsSection.querySelectorAll('.skills-icon .icon').forEach(i => {i.classList.remove('light-mode')});
    projectsSection.classList.remove('light-mode');
    projectsSection.querySelector('.projects-container h4').classList.remove('light-mode');
    projectsSection.querySelector('.projects-container h5').classList.remove('light-mode');
    contactSection.classList.remove('light-mode');
    contactSection.querySelector('.contact-me a').classList.remove('light-mode');
    // contactSection.querySelector('.contact-me a:hover').classList.remove('light-mode');
  }
})

// Intersection Observer
const aboutItems = aboutSection.querySelectorAll('.ac-left, .ac-right');
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
},{
  rootMargin: "0px 0px -200px 0px"
})

aboutItems.forEach(items => aboutObserver.observe(items));

const workItems = workSection.querySelectorAll('.wc-left, .wc-right');
const workObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
},{
  rootMargin: "0px 0px -200px 0px"
})

workItems.forEach(items => workObserver.observe(items));

const skillsItems = skillsSection.querySelectorAll('h4, .divider, .skills-icon');
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
},{
  rootMargin: "0px 0px -200px 0px"
})

skillsItems.forEach(items => skillsObserver.observe(items));

const projectsItems = projectsSection.querySelectorAll('h4, .divider, h5');
const projectsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
},{
  rootMargin: "0px 0px -100px 0px"
})

projectsItems.forEach(items => projectsObserver.observe(items));

const contactItems = contactSection.querySelectorAll('h4, h6, .divider, .contact-me a, .info');
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
},{
  rootMargin: "0px 0px -100px 0px"
})

contactItems.forEach(items => contactObserver.observe(items));