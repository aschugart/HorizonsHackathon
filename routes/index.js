var express = require('express');
var router = express.Router();
var User = require('../models/user')
var Event = require('../models/event')
var Message = require('../models/message')


router.get('/about', function(req,res,next){
  res.render('about')
})

router.get('/process', function(req,res,next){
  res.render('process')
})

/* GET home page. */
router.use(function(req, res, next){
  if (!req.user) {
    res.redirect('/login');
  } else {
    return next();
  }
});

router.get('/', function(req, res, next) {
	Event.find().exec(function(error, events){
    console.log(events);
		res.render('index', {
			events: JSON.stringify(events)
		})
	})
});

router.get('/addevent', function(req,res,next){
	res.render('addevent')
})

router.post('/addevent', function(req,res,next){
	var ev = new Event({
      title: req.body.title,
      start: +(new Date(req.body.start0 + " " + req.body.start1)),
      details: req.body.details,
      userId: req.user._id
    });
    ev.save(function(err, event) {
                console.log(req.body.title + "title")
    console.log(ev.start + "start")
      if (err) {
        console.log(err);
        res.status(500).redirect('/addevent');
        return;
      }
      else { res.redirect('/') }
    });
})

router.get('/details/:id', function(req,res,next){
	Event.findById(req.params.id).populate('userId').exec(function(err, event){
		if(err) return next(err);
		res.render('details', { event: event, user: req.user })
	})
})

router.get('/message', function(req, res) {
  Message.find({
    to: req.user._id
  }).populate('from').exec(function(err, messages) {
    if (err) {
      res.status(500).render('message', {
        user: req.user,
        error: err.errmsg
      })
    } else {
      res.render('message', {
        user: req.user,
        messages: messages,
        success: req.query.success
      });
    }
  });
});

router.post('/message', function(req, res) {
  if (! req.body.body) {
    res.status(400).render('message', {
      user: req.user,
      error: "Post body is required."
    });
  } else if (! req.body.to) {
    res.status(400).render('message', {
      user: req.user,
      error: "To field is required."
    });
  } else {
    User.findOne({
      username: req.body.to
    }, function(err, toUser) {
      if (err) {
        res.status(400).render('message', {
          user: req.user,
          error: err.errmsg
        });
      } else if (! toUser) {
        res.status(400).render('message', {
          user: req.user,
          error: "No such user: " + req.body.to
        });
      } else {
        var message = new Message({
          from: req.user._id,
          to: toUser._id,
          body: req.body.body
        });
        message.save(function(err) {
          if (err) {
            res.status(500).render('message', {
              user: req.user,
              error: err.errmsg,
            })
          } else {
            res.redirect('message?success=Sent!');
          }
        });
      }
    });
  }
});

router.post('/delete/:messageId', function(req, res) {
  if (! req.params.messageId) {
    res.status(400).render('message', {
      user: req.user,
      error: 'Message id missing'
    });
  } else {
    Message.findByIdAndRemove(req.params.messageId, function(err) {
      if (err) {
        res.status(400).render('message', {
          user: req.user,
          error: err.errmsg
        });
      } else {
        res.redirect('/message?success=Deleted!');
      }
    });
  }
});


module.exports = router;
