const content = document.getElementById('content');
const loader = document.getElementById('loader');

let itemCount = 0;
const maxItems = 100;
const itemsPerLoad = 10;
let loading = false;

function createItem(data) {
  const item = document.createElement('div');
  item.className = 'item';
  item.textContent = `Item ${data.id}: ${data.title}`;
  return item;
}

function loadItems() {
  if (itemCount >= maxItems) return;

  loading = true;
  loader.style.display = 'block';

  // Simulate an API call using the Fetch API
  fetch(`https://jsonplaceholder.typicode.com/posts?_start=${itemCount}&_limit=${itemsPerLoad}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(itemData => {
        const newItem = createItem(itemData);
        content.appendChild(newItem);
        itemCount++;
      });

      loader.style.display = 'none';
      loading = false;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      loader.style.display = 'none';
      loading = false;
    });
}

function handleScroll() {
  const scrollPosition = window.innerHeight + window.scrollY;
  const nearBottom = document.body.offsetHeight - 100; //threshold for triggering more content

  if (scrollPosition >= nearBottom && !loading) {
    loadItems();
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', loadItems);
