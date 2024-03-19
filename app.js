
document.addEventListener('DOMContentLoaded', function() {
    updateFields(); 
    updateMarks();
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
    const options = ['AC','Acura','AITO','Aiways','Alfa Romeo','Alpina','Arcfox','Aro','Asia',
    'Aston Martin','AudiAvatr','BAIC','Baojun','Barkas','BAW','Bentley','BMW','Borgward','Brilliance','Bugatti','Buick','BYD','Cadillac',
    'Changan','Changhe','Chery','Chevrolet','Chrysler','Ciimo','Citroen','Cupra','Dacia','Dadi','Daewoo','Daihatsu','Daimler','Datsun',
    'Dayun','DeLorean','Denza','Derways','Dodge','Dongfeng','DW Hower','Eagle','Evolute','EXEED','FAW','Ferrari','Fiat','Fisker','Ford',
    'Forthing','Foton','GAC','Geely','Genesis','Geo','GMC','Great Wall','Hafei','Haima','Haval','Hawtai','HiPhi','onda','Hongqi','Hozon',
    'Hummer','Hyundai','IM Motors','Infiniti','Iran Khodro','Isuzu','IVECO','JAC','Jaecoo','Jaguar','Jeep','Jetour','Jetta','Jinbei',
    'JMC','Kaiyi','Karma','KG Mobility','Kia','Koenigsegg','Kuayue','Lamborghini','Lancia','Land Rover','Landwind','Leapmotor','Lexus',
    'Li','Lifan','Lincoln','Livan','Lotus','Lucid','Luxgen','Lynk &amp; Co','M-Hero','Marussia','Maserati','Maxus','Maybach','Mazda',
    'McLaren','Mercedes-Benz','Mercury','MG','MINI','Mitsubishi','Mitsuoka','Nio','Nissan','Oldsmobile','OMODA','Opel','ORA','Oshan',
    'Oting','Pagani','Perodua','Peugeot','Plymouth','Polar Stone','Polestar','Pontiac','Porsche','Proton','Qingling','Radar','RAM',
    'Ravon','Renault','Renault Samsung','Rimac','Rising Auto','Rivian','Roewe','Rolls-Royce','Rover','Saab','SAIPA','Saturn','Scion',
    'SEAT','Seres','Shineray','Shuanghuan','Skoda','Skywell','Smart','Solaris','Sollers','Soueast','SsangYong','Subaru','Suzuki','SWM',
    'Tank','TATA','Tesla','Tianma','Tianye','Toyota','Venucia','VGV','Volkswagen','Volvo','Vortex','Voyah','Weltmeister','WEY',
    'Wiesmann','Wuling','Xcite','Xiaomi','Xin Kai','Xpeng','Zeekr','Zotye','ZX','Амберавто','Амбертрак','Аурус','Богдан','ГАЗ',
    'Донинвест','ЗАЗ','ЗИЛ','ЗиС','ИЖ','Лада','ЛуАЗ','Москвич','Прочие авто','РАФ','ТагАЗ','УАЗ'];
    options.forEach(optionText => {
        const option = document.createElement('option'); // Создаем новый элемент <option>
        option.text = optionText; // Устанавливаем текст для <option>
        select.appendChild(option); // Добавляем <option> в <select>
    });
}

document.getElementById('category').addEventListener('change', function() {
    updateFields();
    var select = document.getElementById('category');
    select.blur();
});

document.getElementById('category').addEventListener('focus', function() {
    var select = document.getElementById('category');
    select.selectedIndex = -1;
});

document.getElementById('category').addEventListener('click', function() {
    var select = document.getElementById('category');
    console.log(select.hasAttribute('open'))
    if (select.hasAttribute('open'))
        select.blur();
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

