const router = require('express').Router();

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
        case 'free':
            nums = (req.body.operation).split(' ');
            console.log(nums);
            result = 0;
            index = 0;
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
            console.log(nums);
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
            console.log('Escoja una no meme');
        
    }

})

module.exports = router