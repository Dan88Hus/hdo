const cloudinary = require("cloudinary").v2;
const sgMail = require("@sendgrid/mail");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let publicSecureUrl = [];

exports.images = async function (req, res) {
  let publicId = [];
  try {
    await cloudinary.api.resources(
      { resource_type: "image", type: "upload", max_results: 50 },
      function (error, result) {
        result.resources.forEach((element) => {
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


exports.sendMail = async (req, res) => {
  // console.log("TEST SEND MAIL")
  let { firstname, lastname, email, telephone, message } = req.body;
  // console.log(firstname, lastname, email, telephone, message )

 sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email, // Change to your recipient
    from: process.env.MAIL_USERNAME, // Change to your verified sender
    subject: message.substring(0, 5)+"...",
    html: `<p><b>First Name</b>:\t${firstname}</p><br/><p><b>Last Name</b>:\t${lastname}</p><br/><p><b>Email</b>:\t${email}</p><br/><p><b>Telephone</b>:\t${telephone}</p><br/><p><b>Comment</b>:\t${message}</p><br/>`,
  };
  await sgMail
    .send(msg)
    .then(() => {
      // console.log("Email sent");
      res.send({ RESULT: "OK" }).status(200);
    })
    .catch((error) => {
      console.error(error);
    });
};
