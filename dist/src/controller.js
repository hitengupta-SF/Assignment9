var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pool } from './queries.js';
class controller {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            pool.query(`SELECT users.id,firstname,middlename,lastname,email,
    phone,users.address,customer.name AS customer,role.name AS role FROM users 
    LEFT JOIN customer ON customer.id = users.customer LEFT JOIN role
    ON role.key = users.role ORDER BY id ASC`, (err, result) => {
                if (err) {
                    console.warn(err);
                }
                if (result) {
                    res.status(200).json({ message: 'all user data', data: result.rows });
                }
            });
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            pool.query(`SELECT users.id,firstname,middlename,lastname,email,phone,
users.address,customer.name AS customer,role.name AS role FROM users
LEFT JOIN customer ON customer.id = users.customer LEFT JOIN role
ON role.key = users.role WHERE users.id = $1`, [id], (err, result) => {
                if (err) {
                    res.send('no id found');
                }
                if (result) {
                    res.status(200).json(result.rows);
                }
            });
        });
    }
    getCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            pool.query(`SELECT name from customer ORDER BY id ASC`, (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(200).json(result.rows);
                }
            });
        });
    }
    getCustomerIdByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerName = req.params.name;
            pool.query(`SELECT id FROM customer WHERE name = $1`, [customerName], (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(200).json(result.rows);
                }
            });
        });
    }
    getRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            pool.query(`SELECT name from role ORDER BY key ASC`, (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(200).json(result.rows);
                }
            });
        });
    }
    getRoleKeyByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleName = req.params.name;
            pool.query(`SELECT id FROM role WHERE name = $1`, [roleName], (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(200).json(result.rows);
                }
            });
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, middlename, lastname, email, phone, role, address, customer } = req.body;
            pool.query(`INSERT INTO users(firstname,middlename,lastname,email,phone,role,
            address,customer) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`, [firstname, middlename, lastname, email, phone, role, address, customer], (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(201).json("User addeed succeessfully");
                }
            });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const { firstname, middlename, lastname, email, phone, role, address, customer } = req.body;
            pool.query(`UPDATE users SET firstname = $1, middlename = $2, lastname = $3, email = $4,
         phone = $5, role = $6, address = $7,customer = $8 WHERE id = $9`, [firstname, middlename, lastname, email, phone, role, address, customer, id], (err, result) => {
                if (err) {
                    res.status(400).send("Failed due to bad input");
                    throw err;
                }
                else {
                    res.status(200).json("Updated");
                }
            });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            pool.query('DELETE FROM users WHERE id = $1', [id], (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(200).json("Deleted");
                }
            });
        });
    }
}
export const userController = new controller();
//# sourceMappingURL=controller.js.map