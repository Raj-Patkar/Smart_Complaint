export const createComplaint = async (data, file) => {
  const formData = new FormData();

  formData.append("description", data.description);
  formData.append("duration", data.duration);
  formData.append("affected_count", data.affected_count);

  if (file) {
    formData.append("image", file); // MUST MATCH multer field
  }

  const res = await fetch("http://localhost:5000/api/complaints", {
    method: "POST",
    credentials: "include",
    body: formData
  });

  return res.json();
};

export const getMyComplaints = async () => {
  const res = await fetch("http://localhost:5000/api/complaints/my", {
    method: "GET",
    credentials: "include"
  });

  return res.json();
};

export const getAllComplaints = async () => {
  const res = await fetch("http://localhost:5000/api/admin/complaints", {
    method: "GET",
    credentials: "include"
  });

  return res.json();
};