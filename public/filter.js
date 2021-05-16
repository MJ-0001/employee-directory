// const filterBtn = document.getElementsByClassName('table-btn');
// filterBtn.addEventListener('click', filterNames);

const list = [{name: 'jack'}, {name: 'alice'}, {name: 'yen'}]

function filterNames() {
  const newList = list.sort((a, b) => (a.name > b.name) ? 1 : -1)
  console.log(newList)
}

filterNames();
// export default filterNames;