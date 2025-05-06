
const tabs = document.querySelectorAll('.tabs');
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach((el) => {
      el.classList.remove('active');
    });
    tab.classList.add('active');
  })
})