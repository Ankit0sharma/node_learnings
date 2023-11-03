const bcrypt = require("bcrypt");
const Person = require("../../../models/person");

module.exports = async (req, res) => {
    try {
        const { name, email, age, address, password } = req.body;
        const existingPerson = await Person.query().findOne({
            email,
        });
        if (existingPerson) {
            return res.status(400).json({ message: "Person already exists" });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        personData = await Person.query().insert({
            name,
            email,
            age,
            address,
            password: hashedPassword,
        });
        return res.status(201).json({
            success: true,
            message: "Person created successfully",
            createdPerson: personData,
        });
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            message: error.message,
        });
    }
}
