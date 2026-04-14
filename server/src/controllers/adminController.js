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

export const updateComplaintStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ['pending', 'seen', 'in_progress', 'resolved'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        const result = await pool.query(
            `UPDATE complaints SET status = $1, updated_at = NOW() 
             WHERE id = $2 RETURNING *`,
            [status, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Complaint not found" });
        }

        res.json({ message: "Status updated", complaint: result.rows[0] });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
