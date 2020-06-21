const express = require('express')
const rateLimit = require('express-rate-limit')
const { Message } = require('../models')
const { mailTransporter } = require('../../utils/nodemailer')
const { getRealIp } = require('../../utils/req-helpers')

const router = express.Router()

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5, // limit each IP to 5 requests per windowMs
  keyGenerator: getRealIp,
})

/* POST message */
router.post('/message', limiter, (req, res) => {
  const ip = getRealIp(req)

  const message = new Message({ ...req.body, ip })
  const { name, email, subject, content } = req.body
  message
    .save()
    .then(() => {
      res
        .status(200)
        .json({})
        .end()
      mailTransporter.sendMail(
        {
          from: 'Rahul Jain <jain.rahul.0110@gmail.com>',
          to: 'Rahul Jain <rahuljain840@gmail.com>',
          replyTo: `${name} <${email}>`,
          subject,
          html: `<article>
          <h4>Here's a message from rahuljain.work contact form:</h4>
          <p>${content}</p>
          <p>From: ${name}<br />IP Address: ${ip}</p>
          </article>`,
        },
        err => {
          if (err) {
            return console.error('m.....', err)
          }
        }
      )
    })
    .catch(err => {
      console.log('c.....', err);
      return res
        .status(400)
        .json(err)
        .end()
    })
})

module.exports = router
