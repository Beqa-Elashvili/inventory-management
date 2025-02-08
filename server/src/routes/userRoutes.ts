import { Router } from "express";
import { getUsers } from "../controllers/usercontreller";

const router = Router();

router.get("/", getUsers);

export default router;
