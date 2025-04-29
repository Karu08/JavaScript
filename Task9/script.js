const content = document.getElementById('content');
const loader = document.getElementById('loader');

let itemCount = 0;
const maxItems = 100;
const itemsPerLoad = 10;
let loading = false;

function createItem(index) {
  const item = document.createElement('div');
  item.className = 'item';
  item.textContent = `Item ${index + 1}`;
  return item;
}

function loadItems() {
  if (itemCount >= maxItems) return;

  loading = true;
  loader.style.display = 'block';

  setTimeout(() => {
    for (let i = 0; i < itemsPerLoad && itemCount < maxItems; i++) {
      const newItem = createItem(itemCount);
      content.appendChild(newItem);
      itemCount++;
    }
    loader.style.display = 'none';
    loading = false;
  }, 1000); 
}

function handleScroll() {
  const scrollPosition = window.innerHeight + window.scrollY;
  const nearBottom = document.body.offsetHeight - 100; //threshold for triggering the loading of more content

  if (scrollPosition >= nearBottom && !loading) {
    loadItems();
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', loadItems);
