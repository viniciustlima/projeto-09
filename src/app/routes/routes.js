
const router = require("express").Router();

router.get("/", (req, res) => {
	return res.json({ message: "hello" });
});

module.exports = router;