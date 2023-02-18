const User = require('../model/userModel');



const userController = {

  async signup(req, res, next) {
      try {
          const user = await new User({ username: req.body.username, password: req.body.password, cohortNumber: req.body.cohortNumber });
          user.save();
          //possibly redirect to signup page with then

          res.locals.user = user;
          return next()
      } catch (err) {
          return next({
              log: `err: ${err}`,
              status: 500,
              message: { err: 'error in usercontroller.signup middleware' }
            })
        }
    },


  async addpoint(req, res, next) {
    try {
        const user = await User.findOneAndUpdate({ username: req.body.username }, {$inc: {participation: 1 }});
        user.save();
        //possibly redirect to signup page with then

        res.locals.user = user;
        return next()
    } catch (err) {
        return next({
            log: `err: ${err}`,
            status: 500,
            message: { err: 'error in usercontroller.signup middleware' }
          })
      }
  }


}
 

module.exports = userController;