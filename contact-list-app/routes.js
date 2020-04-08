const Router = require("koa-router");
const router = new Router();
const {
    createNewContact,
    getAllContacts,
    getContactDetails,
    updateContactNumber,
    deleteContact
} = require("./controllers");

router.post("/create", createNewContact);
router.get("/contacts", getAllContacts);
router.get("/contact/:number", getContactDetails);
router.patch("/contact/update/:id", updateContactNumber);
router.delete("/contact/delete/:number", deleteContact)

module.exports = router;