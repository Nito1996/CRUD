const showAll = function () {
    let body = document.createElement('tbody');
    body.id = 'carTableBody';

    for (let index = 0; index < localStorage.length; index++) {
        const id = localStorage.key(index);
        const { brand, model, year, color } = JSON.parse(localStorage.getItem(id));

        let idTd = document.createElement('td');
        let brandTd = document.createElement('td');
        let modelTd = document.createElement('td');
        let actionTd = document.createElement('td');
        let yearTd = document.createElement('td');
        let colorTd = document.createElement('td');
        let btnDelete = document.createElement('button');
        let btnEdit = document.createElement('button');
        let row = document.createElement('tr');

        idTd.textContent = id;
        brandTd.textContent = brand;
        modelTd.textContent = model;
        yearTd.textContent = year;
        colorTd.textContent = color;
        btnDelete.textContent = 'DELETE SON';
        btnDelete.onclick = function () {
            remove(id);
        };
        btnEdit.textContent = 'EDIT DAUGHTER';
        btnEdit.onclick = function () {
            add()
        };

        actionTd.appendChild(btnDelete);
        actionTd.appendChild(btnEdit);
        row.appendChild(idTd);
        row.appendChild(brandTd);
        row.appendChild(modelTd);
        row.appendChild(yearTd);
        row.appendChild(colorTd);
        row.appendChild(actionTd);
        body.appendChild(row);
    }
    document.getElementById('carTableBody').replaceWith(body);
};
const add = function () {
    const id = document.getElementById('inputId').value;
    const brand = document.getElementById('inputBrand').value;
    const model = document.getElementById('inputModel').value;
    const year = document.getElementById('inputYear').value;
    const color = document.getElementById('inputColor').value;
    const car = JSON.stringify({ id, brand, model, year, color });
    localStorage.setItem(id, car);
    showAll();
};
const remove = function (id) {
    localStorage.removeItem(id);
    showAll();
};
const clearAll = function () {
    localStorage.clear();
    showAll();
};
window.onload = showAll;
