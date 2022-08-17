const categoriesAmountRef = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesAmountRef.length);

categoriesAmountRef.forEach(element => {
  const categoryHeader = element.firstElementChild.textContent;
  console.log(`Category ${categoryHeader}`);
  const categoryList = element.firstElementChild.nextElementSibling.children.length;
  console.log(`Elements ${categoryList}`);
});
