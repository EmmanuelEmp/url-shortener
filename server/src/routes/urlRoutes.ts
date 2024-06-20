import express from "express";
import { createUrl,getAllUrl,getUrl, deleteUrl } from "../controllers/shortUrl";
import { validateUrlMiddleware } from "../middleware/validate"

const router = express.Router();

router.post("/short", validateUrlMiddleware, createUrl);
router.get("/short", getAllUrl);
router.get("/short/:id", getUrl);
router.delete("/short/:id", deleteUrl);


export default router;

