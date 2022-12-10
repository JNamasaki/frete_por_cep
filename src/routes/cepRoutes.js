import express from "express"
import viacep from "../config/viacep.js"

const router = express.Router();

router
    .get("/:id", async(req, res) => {


        console.log(`${id}/json/`);
        const { data } = await viacep.get(`${id}/json/`);
        const id = req.params.id
        return res.send({ name: data.name })

    })
export default router;