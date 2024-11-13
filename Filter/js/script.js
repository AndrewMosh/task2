document.getElementById('searchInput').addEventListener('input', function () {
	const filter = this.value.toLowerCase();
	const items = document.querySelectorAll('.filter__item');
  
	items.forEach(item => {
	  const text = item.textContent.toLowerCase();
	  item.style.display = text.includes(filter) ? '' : 'none';
	});
  });
  