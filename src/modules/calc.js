export function calc(){
    // calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0 + " uah";

    persons.addEventListener('change', function(){
        personsSum =+ this.value;
        total = (daysSum + personsSum)*2000;
        console.log('personsSum ' + personsSum);
        console.log('restDays.value ' + restDays.value);
        if(restDays.value == '' || personsSum == 0 || persons.value == ''  || daysSum == 0){
            totalValue.innerHTML = 0;
        }else{
            totalValue.innerHTML = total + " uah";
        }
    });

    restDays.addEventListener('change', function(){
        daysSum =+ this.value;
        total = (daysSum + personsSum)*4000;
        console.log('daysSum ' + daysSum);
        console.log('persons.value ' + persons.value);
        if(persons.value == ''  || daysSum == 0 || restDays.value == '' || personsSum == 0){
            totalValue.innerHTML = 0;
        }else{
            totalValue.innerHTML = total + " uah";
        }
    });

    place.addEventListener('change', function(){
        if(restDays.value == '' || persons.value == '' || persons.value == 0 || restDays == 0){
            totalValue.innerHTML = 0;
        }else{
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value  + " uah";
        }
    });



}

//module.exports = calc;