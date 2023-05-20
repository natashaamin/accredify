"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCareer = void 0;
const getCareer = (req, res) => {
    res.set('Cache-Control', 'no-cache');
    res.set('Content-Type', 'application/json');
    res.json({
        data: [
            {
                id: 1,
                name: "Account Manager",
                description: "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
                category: "Sales and Marketing",
                type: "technical",
                progress: 35, // integer ranging from 0 to 100
            },
        ],
    });
};
exports.getCareer = getCareer;
//# sourceMappingURL=career.controller.js.map