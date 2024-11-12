const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const resultList = document.getElementById('result-list');

const data = [
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Node.js',
  'Vue.js',
  'Angular',
  'TypeScript',
  'Python',
  'Java',
];

searchButton.addEventListener('click', function() {
  const query = searchInput.value.toLowerCase();
  const filteredData = data.filter(item => item.toLowerCase().includes(query));
  
  resultList.innerHTML = '';

  if (filteredData.length > 0) {
    filteredData.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      resultList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'Результаты не найдены';
    li.classList.add('no-results');
    resultList.appendChild(li);
  }
});