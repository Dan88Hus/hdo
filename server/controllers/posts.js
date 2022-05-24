const cloudinary = require("cloudinary").v2;
// const sgMail = require("@sendgrid/mail");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let imageTempPath = [];
let publicIdResponse;
let publicSecureUrl = [];

exports.images = async function (req, res) {
  let publicId = [];

  try {
    await cloudinary.api.resources(
      { resource_type: "image", type: "upload", max_results: 50 },
      function (error, result) {
        console.log("here",result, error);
        result.resources.forEach((element) => {
          // console.log("RESULT: ", element.secure_url)
          publicSecureUrl.push(element.secure_url);
        });
      }
    );
    res.send(publicSecureUrl).status(200);
  } catch (error) {
    console.log("Error in downloading images", error);
  }
  publicSecureUrl = [];
};

exports.test = async function (req,res) {
  console.log('test is ok')
  res.json('test is ok').status(200);
}

// exports.sendMail = async (req, res) => {
//   // console.log("TEST SEND MAIL")
//   let { firstname, lastname, email, telephone, message } = req.body;
//   // // console.log(firstname)

//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: 'info@blumenhandarbeit.de', // Change to your recipient
//     from: process.env.MAIL_TO, // Change to your verified sender
//     subject: message.substring(0, 10)+"...",
//     // text: "and easy to do anywhere, even with Node.js",
//     html: `<p><b>VorName</b>:\t${firstname}</p><br/><p><b>NachName</b>:\t${lastname}</p><br/><p><b>Email</b>:\t${email}</p><br/><p><b>Telefon</b>:\t${telephone}</p><br/><p><b>Nachricht</b>:\t${message}</p><br/>`,
//   };
//   await sgMail
//     .send(msg)
//     .then(() => {
//       // console.log("Email sent");
//       res.send({ RESULT: "OK" }).status(200);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
