
//import { MARKS } from "./modelCatalog.js";

document.addEventListener('DOMContentLoaded', function() {
    updateFields(); 
    updateMarks();
    updateModels();
});

function updateFields() {
    var category = document.getElementById('category').value;
    var vehicleFields = document.getElementById('vehicleFields');
    var personalItemsFields = document.getElementById('personalItemsFields');

    if (category === 'vehicles') {
        vehicleFields.style.display = 'block';
        personalItemsFields.style.display = 'none';
    } else if (category === 'personal_items') {
        vehicleFields.style.display = 'none';
        personalItemsFields.style.display = 'block';
    }
}

function updateMarks() {
    const select = document.getElementById('marksSelector');
    const options = MARKS;

    const none_option = document.createElement('option'); // Создаем новый элемент <option>
    none_option.text = '[- Не указывать -]'; // Устанавливаем текст для <option>
    select.appendChild(none_option); // Добавляем <option> в <select>

    options.forEach(optionText => {
        const option = document.createElement('option'); // Создаем новый элемент <option>
        option.text = optionText; // Устанавливаем текст для <option>
        select.appendChild(option); // Добавляем <option> в <select>
    });
}

let last_categorySelector = 0;

document.getElementById('category').addEventListener('change', function() {
    updateFields();
    var select = document.getElementById('category');
    select.blur();
});

document.getElementById('category').addEventListener('focus', function() {
    var select = document.getElementById('category');
    last_categorySelector = select.selectedIndex;
    select.selectedIndex = -1;
});

document.getElementById('category').addEventListener('focusout', function() {
    var select = document.getElementById('category');
    if (select.selectedIndex == -1)
        select.selectedIndex = last_categorySelector;
});

function updateModels() {
    const marksSelector = document.getElementById('marksSelector');
    const modelsSelector = document.getElementById('modelsSelector');
    const options = ALL_MARKS_MODELS[marksSelector.selectedIndex - 1];
    modelsSelector.innerHTML = '';

    const none_option = document.createElement('option'); // Создаем новый элемент <option>
    none_option.text = '[- Не указывать -]'; // Устанавливаем текст для <option>
    modelsSelector.appendChild(none_option); // Добавляем <option> в <select>

    options.forEach(optionText => {
        const option = document.createElement('option'); // Создаем новый элемент <option>
        option.text = optionText; // Устанавливаем текст для <option>
        modelsSelector.appendChild(option); // Добавляем <option> в <select>
    });
}

document.getElementById('marksSelector').addEventListener('change', function() {
    updateModels();
    var select = document.getElementById('marksSelector');
    select.blur();
});

let last_marksSelector = 0;

document.getElementById('marksSelector').addEventListener('focus', function() {
    var select = document.getElementById('marksSelector');
    last_marksSelector = select.selectedIndex;
    select.selectedIndex = -1;
});

document.getElementById('marksSelector').addEventListener('focusout', function() {
    var select = document.getElementById('marksSelector');
    if (select.selectedIndex == -1)
        select.selectedIndex = last_marksSelector;
});


document.getElementById('adType').addEventListener('change', function() {
    var adType = this.value;
    var phoneFields = document.getElementById('phoneFields');
    // Остальные поля для других типов объявлений

    if (adType === 'phone') {
        phoneFields.style.display = 'block';
    } else {
        phoneFields.style.display = 'none';
    }
    // Аналогично для других типов объявлений
});

