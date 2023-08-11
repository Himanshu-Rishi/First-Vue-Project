import express from 'express'
import { createOrUpdate, getEmployeeById, readAllEmployee} from './db.js'

const router = express.Router()

// READ ALL Users
router.get('/employee', async(req, res) => {
    const { success, data } = await readAllEmployee();

    if(success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, messsage: "Error"})
})

// Get User by ID
router.get("/employee/:id", async (req, res) => {
  const { id } = req.params;
  const { success, data } = await getEmployeeById(id);
  console.log(data);
  if (success) {
    return res.json({ success: true, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
});

// Create User
router.post("/employee", async (req, res) => {
  const { success, data } = await createOrUpdate(req.body);

  if (success) {
    return res.json({ success, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
});

export default router