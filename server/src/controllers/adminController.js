import pool from "../config/db.js";

export const getAllComplaints = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM complaints 
             ORDER BY 
               CASE urgency 
                 WHEN 'High' THEN 1 
                 WHEN 'Medium' THEN 2 
                 WHEN 'Low' THEN 3 
               END, 
               cluster_count DESC, 
               created_at DESC`
        );
        res.json({ complaints: result.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
