// controllers/packages.js

// In-memory storage for packages
const packages = [];
let nextPackageId = 1;

// Helper function to find a package by ID
function findPackageById(id) {
    return packages.find(p => p.id === parseInt(id));
}

exports.listPackages = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = packages.slice(startIndex, endIndex);

    res.status(200).json({
        data: paginatedData,
        meta: { page, limit, total: packages.length }
    });
};

exports.getPackage = (req, res) => {
    const packageItem = findPackageById(req.params.id);
    if (!packageItem) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Package not found" } });
    res.status(200).json(packageItem);
};

exports.createPackage = (req, res) => {
    const { name, price } = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({ error: { code: "VALIDATION_ERROR", message: "Name and price are required" } });
    }
    const packageExists = packages.some(p => p.name === name);

    if (packageExists) {
        return res.status(409).json({ error: { code: "CONFLICT", message: "Package with this name already exists" } });
    }

    const newPackage = { id: nextPackageId++, name, price };
    packages.push(newPackage);
    res.status(201).json(newPackage);
};

exports.updatePackage = (req, res) => {
    const packageItem = findPackageById(req.params.id);
    if (!packageItem) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Package not found" } });

    const { name, price } = req.body;
    if (name !== undefined) packageItem.name = name;
    if (price !== undefined) packageItem.price = price;

    res.status(200).json(packageItem);
};

exports.deletePackage = (req, res) => {
    const index = packages.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: { code: "NOT_FOUND", message: "Package not found" } });
    packages.splice(index, 1);
    res.status(204).send();
};