// controllers/packages.js
const data = require('../data');

exports.listPackages = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = data.packages.slice(startIndex, endIndex);

    res.status(200).json({
        data: paginatedData,
        meta: { page, limit, total: data.packages.length }
    });
};

exports.getPackage = (req, res) => {
    const pkg = data.packages.find(p => p.id === parseInt(req.params.id));
    if (!pkg) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Package not found" } });
    res.status(200).json(pkg);
};

exports.createPackage = (req, res) => {
    const { name, price } = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({ error: { code: "VALIDATION_ERROR", message: "Name and price are required" } });
    }
    if (data.packages.some(p => p.name === name)) {
        return res.status(409).json({ error: { code: "CONFLICT", message: "Package with this name already exists" } });
    }
    const newPackage = { id: data.nextPackageId++, name, price };
    data.packages.push(newPackage);
    res.status(201).json(newPackage);
};

exports.updatePackage = (req, res) => {
    const pkg = data.packages.find(p => p.id === parseInt(req.params.id));
    if (!pkg) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Package not found" } });
    const { name, price } = req.body;
    if (name !== undefined) pkg.name = name;
    if (price !== undefined) pkg.price = price;
    res.status(200).json(pkg);
};

exports.deletePackage = (req, res) => {
    const index = data.packages.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Package not found" } });
    data.packages.splice(index, 1);
    res.status(204).send();
};