//import { MARKS } from "./modelCatalog.js";

document.addEventListener('DOMContentLoaded', function() {
    updateCities();
    updateFields(); 
    updateMarks();
    updateModels();
    updateYearStart();
    updateYearEnd();
    updateVolumeStart();
    updateVolumeEnd();
});

document.getElementById('body').addEventListener('touchstart', function() {
    select = document.activeElement;
    select.blur();
});

//#region UPDATERS

function updateCities() {
    var citySelector = document.getElementById('citySelector');
    const options = CITIES;

    const none_option = document.createElement('option');
    none_option.text = 'Любой город';
    citySelector.appendChild(none_option);

    options.forEach(optionText => {
        const option = document.createElement('option'); 
        option.text = optionText;
        citySelector.appendChild(option);
    });
}

function updateFields() {
    var category = document.getElementById('categorySelector').value;
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

    const none_option = document.createElement('option'); 
    none_option.text = 'Любая марка';
    select.appendChild(none_option); 

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.text = optionText; 
        select.appendChild(option); 
    });
}

function updateModels() {
    const marksSelector = document.getElementById('marksSelector');
    const modelsSelector = document.getElementById('modelsSelector');
    const options = ALL_MARKS_MODELS[marksSelector.selectedIndex];
    modelsSelector.innerHTML = '';

    const none_option = document.createElement('option');
    none_option.text = 'Любая модель';
    modelsSelector.appendChild(none_option); 

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.text = optionText;
        modelsSelector.appendChild(option);
    });
}

function updateYearStart(ended = 2030) {

    var yearsList = [];

    for (var year = 1970; year <= ended; year++) {
        yearsList.push(year);
    }

    const Selector = document.getElementById('yearStartSelector');
    var lastYearStart = Selector.value;
    const options = yearsList;
    Selector.innerHTML = '';

    const none_option = document.createElement('option');
    none_option.text = 'От любого года';
    Selector.appendChild(none_option); 

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.text = optionText;
        Selector.appendChild(option);
    });

    if (lastYearStart <= ended)
        Selector.value = lastYearStart;
    if (Selector.value == '')
        Selector.selectedIndex = 0;

}

function updateYearEnd(started = 1970) {

    var yearsList = [];

    for (var year = started; year <= 2030; year++) {
        yearsList.push(year);
    }

    const Selector = document.getElementById('yearEndSelector');
    var lastYearEnd = Selector.value;
    const options = yearsList;
    Selector.innerHTML = '';

    const none_option = document.createElement('option');
    none_option.text = 'До любого года';
    Selector.appendChild(none_option); 

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.text = optionText;
        Selector.appendChild(option);
    });

    if (lastYearEnd >= started)
        Selector.value = lastYearEnd;
    if (Selector.value == '')
        Selector.selectedIndex = 0;

}

function updateVolumeStart(ended = 8.0) {

    var volumeList = [];

    for (var volume = 0.5; volume <= ended; volume = volume + 0.1) {
        volumeList.push(volume.toFixed(1));
    }

    const Selector = document.getElementById('volumeStartSelector');
    var lastVolumeStart = Selector.value;
    const options = volumeList;
    Selector.innerHTML = '';

    const none_option = document.createElement('option');
    none_option.text = 'От любого объема';
    Selector.appendChild(none_option); 

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.text = optionText;
        Selector.appendChild(option);
    });

    if (lastVolumeStart <= ended)
        Selector.value = lastVolumeStart;
    if (Selector.value == '')
        Selector.selectedIndex = 0;

}

function updateVolumeEnd(started = 0.5) {

    var volumeList = [];
    
    for (var volume = started; volume <= 8.0; volume = volume + 0.1) {
        volumeList.push(volume.toFixed(1));
    }

    const Selector = document.getElementById('volumeEndSelector');
    var lastVolumeEnd = Selector.value;
    const options = volumeList;
    Selector.innerHTML = '';

    const none_option = document.createElement('option');
    none_option.text = 'До любого объема';
    Selector.appendChild(none_option); 

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.text = optionText;
        Selector.appendChild(option);
    });

    if (lastVolumeEnd >= started)
        Selector.value = lastVolumeEnd;
    if (Selector.value == '')
        Selector.selectedIndex = 0;

}

//#endregion

//#region categorySelector

document.getElementById('categorySelector').addEventListener('change', function() {
    updateFields();
    var select = document.getElementById('categorySelector');
    select.blur();
});

//#endregion

//#region marksSelector

document.getElementById('marksSelector').addEventListener('change', function() {
    updateModels();
    var select = document.getElementById('marksSelector');
    select.blur();
});

//#endregion

//#region yearStart

document.getElementById('yearStartSelector').addEventListener('change', function() {
    var select = document.getElementById('yearStartSelector');
    if (select.value == 'От любого года')
        updateYearEnd();
    else
        updateYearEnd(select.value);
    select.blur();

});

//#endregion

//#region yearEnd

document.getElementById('yearEndSelector').addEventListener('change', function() {
    var select = document.getElementById('yearEndSelector');
    if (select.value == 'До любого года')
        updateYearStart();
    else
        updateYearStart(select.value);
    select.blur();
});

//#endregion

//#region volumeStart

document.getElementById('volumeStartSelector').addEventListener('change', function() {
    var select = document.getElementById('volumeStartSelector');
    if (select.value == 'От любого объема')
        updateVolumeEnd();
    else
        updateVolumeEnd(parseFloat(select.value));
    select.blur();

});

//#endregion

//#region volumeEnd

document.getElementById('volumeEndSelector').addEventListener('change', function() {
    var select = document.getElementById('volumeEndSelector');
    if (select.value == 'До любого года')
        updateVolumeStart();
    else
        updateVolumeStart(parseFloat(select.value));
    select.blur();
});

//#endregion

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

