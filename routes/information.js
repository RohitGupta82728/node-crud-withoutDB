const express = require('express');
const router = express.Router();

var contacts=[{
    id:1,
    name:"Rohit",
    email:"rohitgupta82728@gmail.com"
}]


router.get('/',(req,res)=>{
    res.send({
        success:true,
        message:"data fetched successfully",
        data:contacts
    })
})


router.post('/',(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
   
    if(name&&email){
        contacts.push({
            id:(contacts.length + 1).toString(),
            name:name,
            email:email
        })
        res.status(200).send({
            success:true,
            message:"data added successfully"
        })
    }else{
        res.status(400).send({
            success:false,
            message:"validation error",
            errors:[
                {
                    field:"name,email",
                    message:"cannot be null"
                }
            ]
        })
    }
})


router.delete('/:id',(req,res)=>{
    var id = req.params.id;
    var newContact = contacts.filter(item=>item.id!=id);
    contacts=newContact;

    res.send({
        success:true,
        message:"data deleted successfully"
    })
})

router.put('/:id',(req,res)=>{
    var id = req.params.id;
    var name = req.body.name;
    var email = req.body.email;



    if(name && email){
        var index = contacts.findIndex(item=>item.id==id);

        contacts[index] = {...contacts[index],
        name:name,
        email:email
        }

        res.send({
            success:true,
            message:"data updated successfully"
        })
    }
    else{
        res.status(200).send({
            success:false,
            message:"validation error",
            errors:[
                {
                    field:"name,email",
                    message:"cannot be null",
                }
            ]
        })
    }
})


module.exports = router;


