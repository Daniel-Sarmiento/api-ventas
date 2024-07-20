const db = require('../configs/db.config');

class Usuario {

    constructor({ id, email, password, deleted, createdAt, updatedAt, deletedAt }) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.deleted = deleted;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static async getAll() {
        const connection = await db.createConnection();
        const [rows] = await connection.query("SELECT id, email, password, deleted, created_at, updated_at, deleted_at FROM usuarios WHERE deleted = 0");
        connection.end();

        return rows;
    }

    static async getById(id) {
        const connection = await db.createConnection();
        const [rows] = await connection.execute("SELECT id, email, password, deleted, created_at, updated_at, deleted_at FROM usuarios WHERE id = ? AND deleted = 0", [id]);
        connection.end();

        if (rows.length > 0) {
            const row = rows[0];

            return new Usuario({ id: row.id, email: row.email, password: row.password, deleted: row.deleted, createdAt: row.created_at, updatedAt: row.updated_at, deletedAt: row.deleted_at })
        }

        return null;
    }

}

module.exports = Usuario;