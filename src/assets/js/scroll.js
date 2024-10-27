/*const aLinks = document.querySelectorAll('[data-link]');

aLinks.forEach (tabLinks);
function tabLinks(item) {
    item.addEventListener('click',function(event) {
    event.preventDefault();
    let thisItem = item;
    let tabId = thisItem.getAttribute('data-link');
    let currentLink = document.querySelector(tabId);
    let elementPosition = currentLink.getBoundingClientRect().top;
    let topOffset = document.querySelector('.container__GridHeader').offsetHeight;
    const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    console.log(thisItem);
    console.log(tabId);
    console.log(currentLink);
    console.log(elementPosition);
    console.log(topOffset);
    console.log(offsetPosition);
    });
}






/*console.log(aLinks);
console.log(aLinks.length);*/
