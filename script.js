function insert_Row() {
	//Write your code here
	let table = document.getElementById('sampleTable');
    let row = table.insertRow(0);

    let leftCell = row.insertCell(0);
    let rightCell = row.insertCell(1);
    leftCell.innerHTML = 'New Cell1';
    rightCell.innerHTML = 'New Cell2';
}
