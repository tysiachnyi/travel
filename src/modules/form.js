export function form(){

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        secondForm = document.querySelector('form'),
        secondFormInput = secondForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        
    statusMessage.classList.add('status');

    function sendForm(elem){
        elem.addEventListener('submit', function(e){
            e.preventDefault();
            let input = elem.getElementsByTagName('input');
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data){

                return new Promise(function(resolve,reject){
                    
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.onreadystatechange = function(){
                            if(request.status == 200 ){
                                resolve()
                            }
                            else{
                                reject()
                            }
                        
                    }
                    request.send(data);
                })

            }// end postdata

            function clearInput(){
                for( let i = 0; i<input.length; i++){
                    input[i].value = '';
                }
            }
            postData(formData)
                .then(()=>statusMessage.innerHTML = message.success)
                .catch(()=>statusMessage.innerHTML = message.failure)
                .finally(clearInput)

        })
    }

    sendForm(form);
    sendForm(secondForm);
    

}

//module.exports = form;