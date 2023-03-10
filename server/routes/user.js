const express = require('express')

const router = express.Router();

const userController = require('../controller/userController');



router.post("/signup",
userController.signup,
(req,res,next) => {
    return res.status(200).json(res.locals.user);
}
)
router.patch("/addpoint",
userController.addpoint,
(req,res,next) => {
    return res.status(200).json(res.locals.user);
}
)


//route


module.exports = router;