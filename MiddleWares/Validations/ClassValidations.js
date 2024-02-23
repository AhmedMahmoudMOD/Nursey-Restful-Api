const { body } = require("express-validator");

exports.insertValidations=[
    body('_id').isInt({min:1}).withMessage("ID Should be A positive Integer"),
    body("fullname").isString().withMessage("Name Should Be String").isAlpha("en-US").withMessage("Name Should Be Written In English With No Numbers or Special Characters")
    .isLength({min:3}).withMessage("Name Should Be at least 3 letters long"),
    
]

exports.updateValidations=[
    body('_id').isInt({min:1}).withMessage("ID Should be A positive Integer"),
    body("fullname").optional().isString().withMessage("Name Should Be String").isAlpha("en-US").withMessage("Name Should Be Written In English With No Numbers or Special Characters")
    .isLength({min:3}).withMessage("Name Should Be at least 3 letters long"),
]

exports.deleteValidations=[
    body('_id').isInt({min:1}).withMessage("ID Should be A positive Integer"),
]