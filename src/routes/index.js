import { Router } from "express";
//import data from "../../data.json" assert { type: "json" };
const router = Router();

//Raiz
router.get("/", (req, res) => {
  res.json({
    Response: "Que bueno eres tio",
  });
});

export default router;
