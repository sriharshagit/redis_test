var rootpath = require('app-root-path');
const dbService = require(rootpath+'/db_utils/db_service');

dbService.insert('harsh','abc').then(function(result){console.log(result)}).catch(function(err){console.log('err',err)});


setInterval(function(){
    
dbService.get('harsh').then(
    function(result){
        console.log(result);
    }
).catch(function(Err){
    console.log('err ',Err);
})
},8000)
