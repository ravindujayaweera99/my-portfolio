const navbar = document.querySelector('.navbar');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navbar.before(scrollWatcher);

const navObserve = new IntersectionObserver(
    (entries) => {
        navbar.classList.toggle('sticking', !entries[0].isIntersecting);
    }
);

navObserve.observe(scrollWatcher);