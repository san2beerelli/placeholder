const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

const adapter = new FileAsync("./server/db/inventory.json");

const getInventories = async id => {
  try {
    const db = await low(adapter);
    if (id) {
      return db
        .get("inventory")
        .find({ id })
        .value();
    }
    return db.get("inventory").value();
  } catch (error) {
    throw error;
  }
};

const getInventoriesPerPage = async (page, rowsPerPage) => {
  try {
    const db = await low(adapter);
    const inventoryArr = db
      .get("inventory")
      .sortBy(function(item) {
        return parseInt(item.id);
      })
      .value();
    return {
      total: inventoryArr.length,
      inventory: inventoryArr.slice(
        page * rowsPerPage,
        (page + 1) * rowsPerPage
      )
    };
  } catch (error) {
    throw error;
  }
};

const updateInventory = async obj => {
  try {
    const db = await low(adapter);
    const inventory = await db
      .get("inventory")
      .find({ id: obj.id })
      .assign(obj)
      .write();
    return inventory;
  } catch (error) {
    throw error;
  }
};

const createInventory = async obj => {
  try {
    const db = await low(adapter);
    const inventory = await db
      .get("inventory")
      .push(obj)
      .write();
    return getInventories(obj.id);
  } catch (error) {
    throw error;
  }
};

const removeInventory = async ids => {
  try {
    const db = await low(adapter);
    ids.forEach(async element => {
      const removedInventory = await db
        .get("inventory")
        .remove({ id: element })
        .write();
    });
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getInventories,
  createInventory,
  getInventoriesPerPage,
  updateInventory,
  removeInventory
};
