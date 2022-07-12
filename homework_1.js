document.addEventListener('DOMContentLoaded', function(){

    function sendPrompt(quest){

        data = +prompt(quest);

        return data
    };

    let counter = 1
    let tumbler = false

    
    while (tumbler === false){

        let number = Math.floor(Math.random() * 1000);
        let question = sendPrompt('Введите число', 'целое число от 1 до 999')

        while (isNaN(question) || question > 1000 || question == null || question == ''){

            alert('ошибка ввода');
            question = sendPrompt('Введите число', 'целое число от 1 до 999')
        };

        if (question === number){

            alert(`Вы угадали! Ваше число: ${question}, случайное число: ${number}`);
        }else if (question < number){
            alert(`Вы не угадали! Ваше число меньше: ${question}, случайное число: ${number}`);
        }else{

            alert(`Вы не угадали! Ваше число больше: ${question}, случайное число: ${number}`);
        }

        if (counter == 3){

            alert('Вы исчерпали количество попыток');
            tumbler = true;
            break
        }
        if (counter < 3 && tumbler == false) {

            alert(`Попытка ${counter} закончилась`);
        }

        // console.log(question)
        // console.log(number)
        
        counter += 1
    };
});
