var bcrypt = require('bcryptjs')

bcrypt.hash("jeet", 5).then(hash=>{ 
    //Hash the password using a Salt that was generated using 10 rounds
    console.log(hash)
    // TODO: Store the resulting "hash" value in the DB
}).catch(err=>{
    console.log(err); 
    // Show any errors thatoccurred during the process    
});