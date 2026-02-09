import express from "express"
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Hello"
    })
})

router.post("/", (req, res) => {
    res.json({
        message: "Hello"
    })
})

router.delete("/", (req, res) => {
    res.json({
        message: "Hello"
    })
})


export default router;
