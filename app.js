//
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

document.getElementById('body').addEventListener('touchend', function() {
    //console.log('touchstart');
    //var selectedCollection = document.getElementsByTagName('select');
    //var selected = [...selectedCollection];
    //selected.forEach(select => {
    //    select.blur();
    //});

    //select = document.activeElement;
    //select.blur();

    alert(document.activeElement);

    //body = document.getElementById('body');
    //body.focus();
});

function updateCities() {
    var citySelector = document.getElementById('citySelector');
    const options = CITIES;
    console.log(CITIES);

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

//#region citySelector

let last_citySelector = 0;

document.getElementById('citySelector').addEventListener('change', function() {
    var select = document.getElementById('citySelector');
    select.blur();
});

document.getElementById('citySelector').addEventListener('focus', function() {
    var select = document.getElementById('citySelector');
    last_citySelector = select.selectedIndex;
    select.selectedIndex = -1;
});

document.getElementById('citySelector').addEventListener('focusout', function() {
    var select = document.getElementById('citySelector');
    if (select.selectedIndex == -1)
        select.selectedIndex = last_citySelector;
});

//#endregion

//#region categorySelector

let last_categorySelector = 0;

document.getElementById('categorySelector').addEventListener('change', function() {
    updateFields();
    var select = document.getElementById('categorySelector');
    select.blur();
});

document.getElementById('categorySelector').addEventListener('focus', function() {
    var select = document.getElementById('categorySelector');
    last_categorySelector = select.selectedIndex;
    select.selectedIndex = -1;
});

document.getElementById('categorySelector').addEventListener('focusout', function() {
    var select = document.getElementById('categorySelector');
    if (select.selectedIndex == -1)
        select.selectedIndex = last_categorySelector;
});

//#endregion

//#region marksSelector

let last_marksSelector = 0;

document.getElementById('marksSelector').addEventListener('change', function() {
    updateModels();
    var select = document.getElementById('marksSelector');
    select.blur();
});

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

//#endregion

//#region yearStart

let last_yearStartSelector = 0;

document.getElementById('yearStartSelector').addEventListener('change', function() {
    var select = document.getElementById('yearStartSelector');
    if (select.value == 'От любого года')
        updateYearEnd();
    else
        updateYearEnd(select.value);
    select.blur();

});

document.getElementById('yearStartSelector').addEventListener('focus', function() {
    var select = document.getElementById('yearStartSelector');
    last_yearStartSelector = select.selectedIndex;
    select.selectedIndex = -1;
});

document.getElementById('yearStartSelector').addEventListener('focusout', function() {
    var select = document.getElementById('yearStartSelector');
    if (select.selectedIndex == -1)
        select.selectedIndex = last_yearStartSelector;
});

//#endregion

//#region yearEnd

let last_yearEndSelector = 0;

document.getElementById('yearEndSelector').addEventListener('change', function() {
    var select = document.getElementById('yearEndSelector');
    if (select.value == 'До любого года')
        updateYearStart();
    else
        updateYearStart(select.value);
    select.blur();
});

document.getElementById('yearEndSelector').addEventListener('focus', function() {
    var select = document.getElementById('yearEndSelector');
    last_yearEndSelector = select.selectedIndex;
    select.selectedIndex = -1;
});

document.getElementById('yearEndSelector').addEventListener('focusout', function() {
    var select = document.getElementById('yearEndSelector');
    if (select.selectedIndex == -1)
        select.selectedIndex = last_yearEndSelector;
});

//#endregion

//#region volumeStart

let last_volumeStartSelector = 0;


document.getElementById('volumeStartSelector').addEventListener('change', function() {
    var select = document.getElementById('volumeStartSelector');
    if (select.value == 'От любого объема')
        updateVolumeEnd();
    else
        updateVolumeEnd(parseFloat(select.value));
    select.blur();

});

document.getElementById('volumeStartSelector').addEventListener('focus', function() {
    var select = document.getElementById('volumeStartSelector');
    last_volumeStartSelector = select.selectedIndex;
    select.selectedIndex = -1;
});

document.getElementById('volumeStartSelector').addEventListener('focusout', function() {
    var select = document.getElementById('volumeStartSelector');
    if (select.selectedIndex == -1)
        select.selectedIndex = last_volumeStartSelector;
});

//#endregion

//#region volumeEnd

let last_volumeEndSelector = 0;

document.getElementById('volumeEndSelector').addEventListener('change', function() {
    var select = document.getElementById('volumeEndSelector');
    if (select.value == 'До любого года')
        updateVolumeStart();
    else
        updateVolumeStart(parseFloat(select.value));
    select.blur();
});

document.getElementById('volumeEndSelector').addEventListener('focus', function() {
    var select = document.getElementById('volumeEndSelector');
    last_volumeEndSelector = select.selectedIndex;
    select.selectedIndex = -1;
});

document.getElementById('volumeEndSelector').addEventListener('focusout', function() {
    var select = document.getElementById('volumeEndSelector');
    if (select.selectedIndex == -1)
        select.selectedIndex = last_volumeEndSelector;
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

