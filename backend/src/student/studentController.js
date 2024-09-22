const studentService = require('./studentService');

const createStudentControllerFn = async (req, res) => {
    try {
        console.log(req.body);
        const status = await studentService.createStudentDBService(req.body);
        console.log(status);

        if(status){
            res.send({"status": true, "message": "User created successfully"});
        } else {
            res.send({"status": false, "message": "Error creating user"});
        }
    } catch(err) {
        console.log(err);
        res.status(500).send({"status": false, "message": "Internal Server Error"});
    }
};

const loginUserControllerFn = async (req, res) => {
    try {
        const result = await studentService.loginuserDBService(req.body);
        if(result.status){
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};

module.exports = { createStudentControllerFn, loginUserControllerFn };
