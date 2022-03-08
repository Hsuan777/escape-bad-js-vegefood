const axios = require('axios');

const url = 'https://hexschool.github.io/js-filter-data/data.json';
const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
let data;
let showData = [];
let category = '';

function renderData(inputData) {
  let str = '';
  inputData.forEach((item) => {
    const content = `<tr>
        <td> ${item['作物名稱']} </td> 
        <td> ${item['市場名稱']} </td>
        <td> ${item['上價']} </td>
        <td> ${item['中價']} </td>
        <td> ${item['中價']} </td>
        <td> ${item['平均價']} </td>
        <td> ${item['交易量']} </td>
      </tr>`;
    str += content;
  });
  table.innerHTML = str;
}

function filterCategory(event) {
  if (event.target.nodeName === 'BUTTON') {
    category = event.target.dataset.category;
    showData = data.filter((item) => item['種類代碼'] === category);
    renderData(showData);
  }
}

axios.get(url)
  .then((res) => {
    data = res.data.filter((item) => item['作物名稱']);
    renderData(data);
  });

filter.addEventListener('click', filterCategory);
