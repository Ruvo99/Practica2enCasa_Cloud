const router = require('express').Router();

//Directorio pare el usuario
router.route('/').get((req, res) => {
    res.json({ 
        msg: 'Choose the operation you want to perform',
        paths:[
            '/suma',
            '/resta',
            '/mult',
            '/div',
            '/free',
        ]
     });
  })


router.route('/:op').post((req,res) => {
    switch(req.params.op){
        //Suma - Recibe en el body un JSON en ese objeto solo hay un tag "nums" que será un arreglo con todos los números que deben de sumar.
        case 'suma':
            nums = req.body.nums;
            suma = 0;
            nums.forEach(num => {
                suma += num;
            });
            res.send({
                respuesta: suma
            })
        break;
        //Resta - Recibe en el body un JSON en ese objeto hay 2 tags 
        //"numToSubs" contiene el numero al cual hay que restarle los números que vienen en el tag "nums" que será un arreglo con todos los números.
        case 'resta':
            nums = req.body.nums;
            resta = req.body.numToSubs;
            nums.forEach(num => {
                resta -= num;
            });
            res.send({
                respuesta: resta
            })
        break;
        //Multiplica - Recibe en el body un JSON en ese objeto solo hay un tag "nums" que será un arreglo con todos los números que deben de multiplicar.
        case 'mult':
            nums = req.body.nums;
            mult = 1;
            nums.forEach(num => {
                mult *= num;
            });
            res.send({
                respuesta: mult
            })   
        break;
        //Divide - Recibe en el body un JSON en ese objeto hay 2 tags 
        //"numToDiv" que contiene el numero al cual hay que dividirlo entre todos los números que vienen en el tag "nums" que será un arreglo.
        case 'div':
            nums = req.body.nums;
            div = req.body.numToDiv;
            nums.forEach(num => {
                div /= num;
            });
            res.send({
                respuesta: div
            })
        break;
        //Free - Recibe en el body un JSON en ese objeto solo hay un tag "operation" que será un STRING con una operación completa usando los siguientes operadores (* / - +).
        case 'free':
            nums = (req.body.operation).split(' ');
            console.log(nums);
            result = 0;
            index = 0;

            //Primero se realizan las multiplicaciones y diviciones de izquierda a derecha 
            while(index != nums.length){
                if(nums[index] === '*') {
                    result = nums[index - 1] * nums[index + 1];
                    nums.splice(index - 1, 3, result);
                    index -= 2;
                }
                if(nums[index] === '/'){
                    result = parseInt(nums[index - 1]) / parseInt(nums[index + 1]);
                    nums.splice(index - 1, 3, result);
                    index -= 2;
                }
                index++;
            }
            //console.log(nums);

            //Después se realizan las sumas y restas de izquierda a derecha
            index = 0;
            while(index != nums.length){
                if(nums[index] === '+'){
                    result = parseInt(nums[index - 1]) + parseInt(nums[index + 1]);
                    nums.splice(index - 1, 3, result);
                    index -= 2;
                }
                if(nums[index] === '-'){
                    result = parseInt(nums[index - 1]) - parseInt(nums[index + 1]);
                    nums.splice(index - 1, 3, result);
                    index -= 2;
                }
                index++;
            }
            res.send({
                respuesta: nums[0]
            });
        break;
        default:
            console.log('Opcion no esta disponible');
        
    }

})

module.exports = router