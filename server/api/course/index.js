const express = require("express");
const uuid = require("uuid");
const HttpStatus = require("http-status-codes");
const router = express.Router();
const db = require("../../db");

router.post("/save", async (req, res) => {
  if (parseInt(req.body.id) === -1) {
    const body = req.body;
    body.id = uuid();
    const inventory = await db.createInventory(body);
    res.status(HttpStatus.OK).json({ inventory });
  } else {
    const inventory = await db.updateInventory(req.body);
    res.status(HttpStatus.OK).json({ inventory });
  }
});

router.post("/delete", async (req, res) => {
  const courseIds = req.body.ids;
  const inventory = await db.removeInventory(courseIds);
  res.status(HttpStatus.OK).json({ inventory });
});

router.get("/:id", async (req, res) => {
  const inventory = await db.getInventories(req.params.id);
  res.status(HttpStatus.OK).json({ inventory });
});
router.get("/", async (req, res) => {
  const inv = await db.getInventoriesPerPage(
    req.query.page,
    req.query.rowsPerPage
  );
  res
    .status(HttpStatus.OK)
    .json({ inventory: inv.inventory, total: inv.total });
});

module.exports = router;
