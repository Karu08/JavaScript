const list = document.getElementById('draggable-list');
let dragEl = null;

list.querySelectorAll('li').forEach(item => {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragleave', handleDragLeave);
  item.addEventListener('drop', handleDrop);
  item.addEventListener('dragend', handleDragEnd);
});

function handleDragStart(e) {
  dragEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', this.innerHTML);
  this.style.opacity = '0.4';
}

function handleDragOver(e) {
  e.preventDefault(); 
  this.classList.add('drag-over');
}

function handleDragLeave() {
  this.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  if (dragEl !== this) {
    dragEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/plain');
  }
  this.classList.remove('drag-over');
}

function handleDragEnd() {
  this.style.opacity = '1';
  list.querySelectorAll('li').forEach(item => item.classList.remove('drag-over'));
}
