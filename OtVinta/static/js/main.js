"use strict";

// Модуль, отвечающий за очистку активных классов, служащих для обозначения выбора текущего этажа и квартиры
var cleaner = function () {
  return {
    toCleanActive: function toCleanActive(object, classEl) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = object[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var elem = _step.value;
          elem.classList.remove(classEl);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  };
}(); // Модуль, отвечающий за очистку активных классов, служащих для обозначения выбора текущего этажа и квартиры
// **********************************************************


(function () {
  var floorWrap = document.querySelector('.house__floor-wrap');
  var floor = document.querySelectorAll('.house__floor');
  var houseWindows = document.querySelectorAll('.floor__window');
  var countFloor = document.getElementById('floor');

  function toClickHouse(event) {
    var target = event.target;
    var conditionFloor = target.classList.contains('house__floor');
    var conditionWindow = target.classList.contains('floor__window') && target.parentElement.classList.contains('house__floor');

    if (conditionFloor) {
      cleaner.toCleanActive(floor, 'floor_active');
      cleaner.toCleanActive(houseWindows, 'window_active');
      target.classList.add('floor_active');
      toCountFloor();
    }

    if (conditionWindow) {
      cleaner.toCleanActive(floor, 'floor_active');
      cleaner.toCleanActive(houseWindows, 'window_active');
      target.classList.add('window_active');
      target.parentElement.classList.add('floor_active');
      toCountFloor();
      toShowPopup(target);
    }
  } // функция для вывода текущего этажа в поле "этаж"


  function toCountFloor() {
    for (var i = 0, j = floor.length; i < floor.length; i++, j--) {
      var element = floor[i];
      var number = j;

      if (element.classList.contains('floor_active')) {
        countFloor.value = number;
      }
    }
  } // функция для показа/скрытия попап


  function toShowPopup(element) {
    var popup = document.querySelector('.popup');
    var form = document.querySelector('.house-form');
    var switchTheme = document.querySelector('.house__form-wrap');
    var closePopup = document.querySelector('.popup-close');

    if (element.classList.contains('active-male') || element.classList.contains('active-female')) {
      if (element.classList.contains('filter_none')) {
        alert('Квартира уже занята, выберите другую!');
        cleaner.toCleanActive(floor, 'floor_active');
        cleaner.toCleanActive(houseWindows, 'window_active');
      } else {
        toInfoPopup.addInfo(element);
        popup.classList.add('popup_visible');
        form.classList.add('hidden');
        switchTheme.classList.add('hidden');
      }
    } else {
      popup.classList.remove('popup_visible');
      form.classList.remove('hidden');
      switchTheme.classList.remove('hidden');
    } // Если кликаем по крестику, то закрываем попап и очищаем активные классы на доме.


    closePopup.onclick = function () {
      popup.classList.remove('popup_visible');
      form.classList.remove('hidden');
      switchTheme.classList.remove('hidden');
      cleaner.toCleanActive(floor, 'floor_active');
      cleaner.toCleanActive(houseWindows, 'window_active');
    };
  } // Обработка события


  floorWrap.addEventListener('click', toClickHouse);
})();

var objectResidents = function () {
  return {};
}();

(function () {
  var nameInput = document.getElementById('name');
  var floor = document.getElementById('floor');
  var rooms = document.getElementById('count-room');
  var people = document.getElementById('count-people');
  var btnForm = document.getElementById('button-form');
  var form = document.getElementById('add-resident');
  var valueName = nameInput.value;
  var valueFloor = floor.value;

  function onInputName(event) {
    var newValue = event.target.value;

    if (newValue.match(/[^a-zA-Zа-яА-Я\s]/g)) {
      nameInput.value = valueName;
      return;
    }

    valueName = newValue;
  }

  function onInputFloor(event) {
    var newValue = event.target.value;

    if (newValue.match(/[^a-zA-Zа-яА-Я\s]/g)) {
      floor.value = valueFloor;
      return;
    }

    valueFloor = newValue;
  }

  function toAddAndValidResident(e) {
    var validName = nameInput.checkValidity();
    var validFloor = floor.checkValidity();
    var validRooms = rooms.checkValidity();
    var validPeople = people.checkValidity();

    if (validName && validFloor && validRooms && validPeople) {
      e.preventDefault();

      if (document.getElementsByClassName('window_active').length) {
        ToaddResident.toAdd(objectResidents); //Вызов глобальной функции для добавления персонажа и информации о нем.

        filter.toChangeData(); // Запускаем рендер фильтра, чтобы проверить попадает ли добавленный персонаж под условия фильтра

        form.reset();
      } else {
        alert('Выберите квартиру');
      }
    }
  }

  ;
  nameInput.addEventListener('input', onInputName);
  floor.addEventListener('input', onInputFloor);
  btnForm.addEventListener('click', toAddAndValidResident);
})();

var ToaddResident = function () {
  var inputName = document.getElementById('name');
  var inputGenderMale = document.getElementById('gender-male');
  var inputGenderFemale = document.getElementById('gender-female');
  var inputFloor = document.getElementById('floor');
  var inputCountRoom = document.getElementById('count-room');
  var inputAddPets = document.getElementById('check-pets');
  var inputAddTv = document.getElementById('check-tv');
  var inputAddInternet = document.getElementById('check-internet');
  var inputCountPeople = document.getElementById('count-people');
  var btnForm = document.getElementById('button-form');
  var windowsHouse = document.querySelectorAll('.floor__window');
  var floor = document.querySelectorAll('.house__floor'); // Глобальная функция для добавления информации из формы в требуемую квартиру

  return {
    toAdd: function toAdd(object) {
      var arr = Array.prototype.slice.call(windowsHouse); // делаем из псевдомассива обычный массив.

      arr.forEach(function (item, i) {
        if (item.classList.contains('window_active')) {
          object[i] = {
            'name': inputName.value,
            'gender': inputGenderMale.checked ? inputGenderMale.value : inputGenderFemale.value,
            'floor': inputFloor.value,
            'rooms': inputCountRoom.value,
            'people': inputCountPeople.value,
            'additional': [inputAddPets.checked, inputAddTv.checked, inputAddInternet.checked]
          };
          localStorage.setItem(i, JSON.stringify(object[i]));
          windowActiveFromLocalStorage.toActive(i, item);
          cleaner.toCleanActive(windowsHouse, 'window_active');
          cleaner.toCleanActive(floor, 'floor_active');
        }
      });
    }
  };
}();

var windowActiveFromLocalStorage = function () {
  return {
    toActive: function toActive(i, element) {
      if (i == 0 || i && element) {
        element.setAttribute('data-count', i);

        if (objectResidents[i]['gender'] == 'мужской') {
          element.classList.remove('active-male');
          element.classList.add('active-male');
        } else if (objectResidents[i]['gender'] == 'женский') {
          element.classList.remove('active-female');
          element.classList.add('active-female');
        }
      } else {
        var windows = document.querySelectorAll('.floor__window');

        for (var _i in objectResidents) {
          windows[+_i].setAttribute('data-count', _i);

          if (objectResidents.hasOwnProperty(_i)) {
            if (objectResidents[_i]['gender'] == 'мужской') {
              windows[+_i].classList.remove('active-male');
              windows[+_i].classList.add('active-male');
            }

            if (objectResidents[_i]['gender'] == 'женский') {
              windows[+_i].classList.remove('active-female');
              windows[+_i].classList.add('active-female');
            }
          }
        }
      }
    }
  };
}();

(function () {
  if (localStorage.length > 0) {
    for (var i = 0; i < localStorage.length; i++) {
      var key = JSON.parse(localStorage.key(i));
      var value = JSON.parse(localStorage.getItem(key));
      objectResidents[key] = value;
    }

    windowActiveFromLocalStorage.toActive(); // Если localStorage не пустой, тогда запускаем функцию, добавляющую информацию о жильцах
  }
})();

var toInfoPopup = function () {
  var name = document.querySelector('.popup__title-name');
  var icon = document.querySelector('.popup__icon');
  var genderInf = document.querySelector('.info_gender');
  var rooms = document.querySelector('.info_rooms');
  var people = document.querySelector('.info_people');
  var floor = document.querySelector('.info_floor');
  var additional = document.querySelector('.info_additional');
  return {
    addInfo: function addInfo(current) {
      var count = current.getAttribute('data-count');
      name.innerText = objectResidents[count]['name']; // добавляем иконку в попап в зависимости от пола и в текстовое поле

      if (objectResidents[count]['gender'] == 'мужской') {
        icon.classList.remove('popup__icon_female');
        icon.classList.add('popup__icon_male');
        genderInf.innerText = 'мужской';
      } else if (objectResidents[count]['gender'] == 'женский') {
        icon.classList.remove('popup__icon_male');
        icon.classList.add('popup__icon_female');
        genderInf.innerText = 'женский';
      }

      rooms.innerText = objectResidents[count]['rooms'];
      people.innerText = objectResidents[count]['people'];
      floor.innerText = objectResidents[count]['floor'];
      var arrFromAdditional = objectResidents[count]['additional'];
      var arrayInfo = ['Домашние животные  ', '  ТВ', '  Интернет'];
      additional.innerText = '';
      arrFromAdditional.some(function (item, i) {
        if (item === true) {
          additional.innerText += arrayInfo[i];
        }
      });
    }
  };
}();

var filter = function () {
  var windows = document.querySelectorAll('.floor__window');
  var male = document.querySelector('#gender-male-filter');
  var female = document.querySelector('#gender-female-filter');
  var countRoom = document.querySelector('#select-room-filter');
  var checkPets = document.querySelector('#check-pets-filter');
  var checkTv = document.querySelector('#check-tv-filter');
  var checkInternet = document.querySelector('#check-internet-filter');
  var countFloor = document.querySelector('#count-floor-filter');
  var btnFilter = document.querySelector('#btn-filter');
  male.addEventListener('input', function () {
    filter.toChangeData();
  });
  female.addEventListener('input', function () {
    filter.toChangeData();
  });
  countRoom.addEventListener('input', function () {
    filter.toChangeData();
  });
  countFloor.addEventListener('input', function () {
    filter.toChangeData();
  });
  checkPets.addEventListener('input', function () {
    filter.toChangeData();
  });
  checkInternet.addEventListener('input', function () {
    filter.toChangeData();
  });
  checkTv.addEventListener('input', function () {
    filter.toChangeData();
  });
  btnFilter.addEventListener('click', function () {
    filter.toChangeData('default');
  });
  return {
    toChangeData: function toChangeData(categories) {
      if (categories == 'default') {
        for (var i = 0; i < windows.length; i++) {
          var element = windows[i];

          if (element.getAttribute('data-count')) {
            element.classList.remove('filter_none');
          }
        }
      } else {
        this.toRenderFilter(categories);
      }
    },
    toRenderFilter: function toRenderFilter() {
      for (var i = 0; i < windows.length; i++) {
        var element = windows[i];

        if (element.getAttribute('data-count')) {
          element.classList.add('filter_none');
        }
      }

      var elemFilterNone = document.querySelectorAll('.filter_none');
      var genderCheck = document.querySelectorAll('.add-resident__radio[name="gender-filter"]');
      var checkbox = [checkPets.checked, checkTv.checked, checkInternet.checked];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = genderCheck[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var active = _step2.value;

          if (active.checked) {
            var gender = active.value;
            break;
          } else {
            var gender = "";
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      for (var _i2 = 0; _i2 < elemFilterNone.length; _i2++) {
        var _element = elemFilterNone[_i2];

        var count = _element.getAttribute('data-count');

        var objectOriginal = objectResidents[count];

        if (checkbox[0] || checkbox[1] || checkbox[2]) {
          var additionalVal = true;
        } else {
          var additionalVal = false;
        }

        if ((objectOriginal['gender'] == gender || gender == '') && (objectOriginal['rooms'] == countRoom.value || countRoom.value == '') && (objectOriginal['floor'] == countFloor.value || countFloor.value == '')) {
          if (additionalVal) {
            if (objectOriginal['additional'][0] == checkbox[0] && objectOriginal['additional'][1] == checkbox[1] && objectOriginal['additional'][2] == checkbox[2]) {
              _element.classList.toggle('filter_none');
            }
          } else {
            _element.classList.toggle('filter_none');
          }
        }
      }
    }
  };
}();