import express from "express";

const router = express.Router();

export default router.get("test", (req, res) => {
  res.send("This is a test");
});
