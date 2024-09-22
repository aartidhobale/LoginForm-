const studentModel = require("./studentModel");
const encryptor = require("simple-encryptor")("aartiarundhobale1234");

const createStudentDBService = async (studentDetails) => {
  try {
    const newStudent = new studentModel({
      email: studentDetails.email,
      username: studentDetails.username,
      password: encryptor.encrypt(studentDetails.password),
    });

    await newStudent.save();
    return true;
  } catch (error) {
    console.log("Error creating student:", error);
    return false;
  }
};

const loginuserDBService = async (studentDetails) => {
  try {
    const result = await studentModel.findOne({ email: studentDetails.email });

    if (result) {
      const decrypted = encryptor.decrypt(result.password);
      if (decrypted === studentDetails.password) {
        return { status: true, msg: "Student Validated Successfully" };
      } else {
        return { status: false, msg: "Student Validation Failed" };
      }
    } else {
      return { status: false, msg: "Student Not Found" };
    }
  } catch (error) {
    console.log("Error finding student:", error);
    throw { status: false, msg: "Internal Server Error" };
  }
};

module.exports = {
  createStudentDBService,
  loginuserDBService,
};
