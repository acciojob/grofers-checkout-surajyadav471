const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll('.price');
	const tr = document.createElement('tr');
	let total = 0;
	prices.forEach((item) => {
		total += Number.parseInt(item.innerHTML);
	});

	tr.innerHTML = `<td id="ans">${total}</td>`;
	document.querySelector('table').appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

