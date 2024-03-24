let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.text = 'Подтвердить';

//document.getElementById('submitButton').addEventListener('click', function () {

//Telegram.WebApp.onEvent("mainButtonClicked", function () {

//Telegram.WebApp.MainButton.onEvent(function () {

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    try {
    
        var city = document.getElementById('citySelector');
        var category = document.getElementById('categorySelector');
        
        var mark = document.getElementById('marksSelector');
        var model = document.getElementById('modelsSelector');
        var yearStart = document.getElementById('yearStartSelector');
        var yearEnd = document.getElementById('yearEndSelector');
        var volumeStart = document.getElementById('volumeStartSelector');
        var volumeEnd = document.getElementById('volumeEndSelector');

        var personalType = document.getElementById('personalTypeSelector');
        var personalProduct = document.getElementById('productListSelector');
        var personalPrompt = document.getElementById('personalPromptSelector');

        filter = `${city.value}[SEPARATOR]`;

        if (category.value == 'vehicles') {
            filter += `VEHICLES[SEPARATOR]${mark.value}[SEPARATOR]${model.value}[SEPARATOR]${yearStart.value}[SEPARATOR]${yearEnd.value}[SEPARATOR]${volumeStart.value}[SEPARATOR]${volumeEnd.value}`;
        }
        else {
            if (personalType.value == 'product_list')
                filter += `PRODUCT[SEPARATOR]${personalProduct.value}`;
            else
                filter += `PRODUCT[SEPARATOR]${personalPrompt.value}`;
        }

        alert(filter);

        tg.sendData(filter);
        tg.sendData(filter);
        tg.sendData(filter);
        tg.sendData(filter);
        tg.sendData(filter);
        tg.close();
    
    } 
    catch (e) {
        // инструкции для обработки ошибок
        alert(e); // передать объект исключения обработчику ошибок
    }

});



$(document).ready(function() {
    $('.js-example-basic-single').select2();
});


document.addEventListener('DOMContentLoaded', function() {
    updateCities();
    updateFields(); 
    updateMarks();
    updateModels();
    updateYearStart();
    updateYearEnd();
    updateVolumeStart();
    updateVolumeEnd();

    updateListProduct();

    var backgrounds = [
        "background: -webkit-linear-gradient(310deg, #4a19dd,#dcf8f0); background: linear-gradient(310deg, #4a19dd,#dcf8f0);",
    ];

    var randomIndex = Math.floor(Math.random() * (backgrounds.length + 1));
    var randomBackground = backgrounds[randomIndex];
    document.body.style = randomBackground;

    tg.MainButton.show();
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
    var personalFields = document.getElementById('personalFields');

    if (category === 'vehicles') {
        vehicleFields.style.display = 'block';
        personalFields.style.display = 'none';
    } else if (category === 'personal_items') {
        vehicleFields.style.display = 'none';
        personalFields.style.display = 'block';
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
    none_option.text = 'Год от';
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
    none_option.text = 'Год до';
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
    none_option.text = 'Объем от';
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
    none_option.text = 'Объем до';
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

function updateListProduct() {

    const productListSelector = document.getElementById('productListSelector');
    const options = PRODUCT_LIST;
    productListSelector.innerHTML = '';

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.text = optionText;
        productListSelector.appendChild(option);
    });
}

//#endregion

//#region categorySelector

$('#categorySelector').on('select2:select', function(e) {
    updateFields();  
});

//#endregion

//#region marksSelector

$('#marksSelector').on('select2:select', function(e) {
    updateModels(); 
});

//#endregion

//#region yearStart

$('#yearStartSelector').on('select2:select', function(e) {
    var select = document.getElementById('yearStartSelector');
    if (select.value == 'Год от')
        updateYearEnd();
    else
        updateYearEnd(select.value);
});

//#endregion

//#region yearEnd

$('#yearEndSelector').on('select2:select', function(e) {
    var select = document.getElementById('yearEndSelector');
    if (select.value == 'Год до')
        updateYearStart();
    else
        updateYearStart(select.value);
});

//#endregion

//#region volumeStart

$('#volumeStartSelector').on('select2:select', function(e) {
    var select = document.getElementById('volumeStartSelector');
    if (select.value == 'Объем от')
        updateVolumeEnd();
    else
        updateVolumeEnd(parseFloat(select.value));
});

//#endregion

//#region volumeEnd

$('#volumeEndSelector').on('select2:select', function(e) {
    var select = document.getElementById('volumeEndSelector');
    if (select.value == 'Объем до')
        updateVolumeStart();
    else
        updateVolumeStart(parseFloat(select.value));
});

//#endregion

//#region personalType

$('#personalTypeSelector').on('select2:select', function(e) {
    var select = document.getElementById('personalTypeSelector');
    var productListSelectWrapper = document.getElementById('productListSelectWrapper');
    var productPromptSelectWrapper = document.getElementById('productPromptSelectWrapper');

    if (select.value == 'product_list')
    {
        productListSelectWrapper.style.display = 'flex';
        productPromptSelectWrapper.style.display = 'none';
    }
    else if (select.value == 'personal_product')
    {
        productListSelectWrapper.style.display = 'none';
        productPromptSelectWrapper.style.display = 'flex';
    }
});

//#endregion
