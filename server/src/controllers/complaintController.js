import axios from "axios";

export const createComplaint = async (req, res) => {
    try {
        const { description, duration, affected_count } = req.body;

        if (!description || !duration || !affected_count) {
            return res.status(400).json({ message: "All fields required" });
        }

        // Call FastAPI ML service
        const mlResponse = await axios.post("http://localhost:8000/predict", {
            complaint_text: description,
            duration,
            affected_count
        });

        const { category, cluster_id, cluster_count, urgency } = mlResponse.data;

        res.json({
            message: "ML call successful",
            category,
            cluster_id,
            cluster_count,
            urgency
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
