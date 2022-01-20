

const data = {
  from: 'Excited User <jamasucks@gmail.com>',
  to: 'jama.avwork@gmail.com',
  subject: 'Hello World',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
    if (error){console.log(error)}
  console.log(body);
});

// // const router = express.Router();
// // let mailgun = mailgunloader({
// //     apiKey: '8b975ee96459f80ad9287c9906e2e76d-20ebde82-844918f9',
// //     domain: 'sandboxa5fe5c97df5a4670a9a111cb166cfa5e.mailgun.org',

// // })
// const sendEmail = (to , from, subject, content) => {
//     let data = {
        
//         to: to,
//         from : from,
//         subject: subject,
//         text: content,
//     };
//     return mailgun.messages().send(data)
// };


// router.post('/api/contact', async (req, res, next) => {
  
// try {
// await sendEmail('jama.avwork@gmail.com', 'test.tes.com', 'hello there', req.body.message);
// res.send('Email sent!')
// } catch(e) {
//     console.log(e);
//     res.status(500);
// }

// });

// export default router;