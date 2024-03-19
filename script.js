const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        const linkId = link.id;

        allLinks.forEach(l => l.classList.toggle("active", l === link));
        allTabs.forEach(tab => tab.classList.toggle("active-tab-content", tab.id === linkId));
    });
});