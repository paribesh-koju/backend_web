//Make a function (logic)

const productModel = require('../models/productmodels')

//Creating user function
const createProduct = async(req, res) => {
    // Get data form the user (Fname, lname, email, password)
    console.log(req.body)
    // #Destructuring
    const {productName, productexpire, email, productdetails } = req.body;
    // Validation
    if(!productName || !productexpire || !email || !productdetails){
        return res.json({
            "success " : false,
            "message" : "Please enter all field !!....."
        })
    }
        // try - Catch (Error handling)
    try{
 // if not : send the response and stop the process 
    // if proper data 
    // check existing user 
    const existingUser = await productModel.findOne({
        email : email
    })
    if(existingUser){
        return res.json({
            "success" : false,
            "message" : "User Already Exist!..."
        })
    }
        // if yes : send the response and stop the process
        // if not : save in the database 
    const newUser = new productModel({
        //fields : Values received from user
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
    })
    //Actually save the database
    await newUser.save()
    
    // send the success response 
    res.json({
        "success" : true,
        "message" : "User Create Successfully!.."
    })
    }catch(error){
        console.log(error)
        res.json({
            "success" : false,
            "message" : "Internal Server Error"
        })
    }
       
}

//Login
//Update profile 
//Change password

//Exporting
module.exports = {
    createProduct
}