const EmployeeModel = require("../Models/EmployeeModel");

const createEmployee = async (req, res) => {
    try {
        const body = req.body;
        const profileImage = req.file ? req.file.path : null;
        body.profileImage = profileImage;

        const emp = new EmployeeModel(body);
        await emp.save();

        res.status(201).json({
            message: 'Employee Created',
            success: true,
            data: emp
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error.message
        });
    }
};

const getAllEmployees = async (req, res) => {
    try {
        let { page, limit, search } = req.query;

        page = parseInt(page) || 1;
        limit = parseInt(limit) || 5;
        const skip = (page - 1) * limit;

        let searchCriteria = {};
        if (search) {
            searchCriteria = {
                name: { $regex: search, $options: 'i' }
            };
        }

        const totalEmployees = await EmployeeModel.countDocuments(searchCriteria);
        const emp = await EmployeeModel.find(searchCriteria)
            .skip(skip)
            .limit(limit)
            .sort({ updatedAt: -1 });

        const totalPages = Math.ceil(totalEmployees / limit);

        res.status(200).json({
            message: 'All Employees',
            success: true,
            data: {
                employees: emp,
                pagination: {
                    totalEmployees,
                    currentPage: page,
                    totalPages,
                    pageSize: limit
                }
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error.message
        });
    }
};

const getByIdEmployees = async (req, res) => {
    try {
        const { id } = req.params;
        const find = await EmployeeModel.findById(id);

        if (!find) {
            return res.status(404).json({ message: 'Employee not found', success: false });
        }

        res.status(200).json({
            message: 'Employee Details',
            success: true,
            data: find
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error.message
        });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const del = await EmployeeModel.findByIdAndDelete(id);

        if (!del) {
            return res.status(404).json({ message: 'Employee not found', success: false });
        }

        res.status(200).json({
            message: 'Employee Deleted',
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error.message
        });
    }
};

const updateByIdEmployee = async (req, res) => {
    try {
        const { name, phone, email, salary, department } = req.body;
        const { id } = req.params;

        let updateData = {
            name, email, phone, department, salary,
            updatedAt: new Date()
        };

        if (req.file) {
            updateData.profileImage = req.file.path;
        }

        const upd = await EmployeeModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!upd) {
            return res.status(404).json({ message: 'Employee Not Found', success: false });
        }

        res.status(200).json({
            message: "Employee updated",
            success: true,
            data: upd
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getByIdEmployees,
    deleteEmployee,
    updateByIdEmployee
};
