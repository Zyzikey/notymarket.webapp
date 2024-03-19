
document.addEventListener('DOMContentLoaded', function() {
    updateFields(); // Показываем или скрываем поля в зависимости от выбранной категории
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

document.getElementById('category').addEventListener('change', function() {
    updateFields();
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

