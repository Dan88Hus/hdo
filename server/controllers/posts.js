// import required libraries and assing it const variable, libraries are installed from node package manager called npm
const cloudinary = require("cloudinary").v2;
const sgMail = require("@sendgrid/mail");

//cloudinary global variable
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// publicSecureUrl is an array and it will contain all images https so that we can send to client
let publicSecureUrl = [];

/* this function will use cloudinary library to fetch images https path and send image paths as array to client
  this will be triggered by rest api end point. we also need to use forEach method to push "https path" to "publicSecureUrl" 
  array because of response can be send once to client. For cloudinary options we used to fetch only "image" type and only uploaded files with max files 50 fetched .
  try-catch block is used because of its asynchrounous function (to prevent blocking client) and to prevent application crash.
  at the end of function, we reset publicSecureUrl so when user refresh page , pictures will not be shown as duplicated on page
*/
exports.images = async function (req, res) {
  try {
    await cloudinary.api.resources(
      { resource_type: "image", type: "upload", max_results:50 },
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


/*
sendMail function is using sendGrid library to send mail to SendGrid mail Server,, 
SendGrid server uses verified mail address to send email, in this case gmail free account is used to send email.
sendMail function gets request from client side which are lastname, firstname, email, telephone, message
response to client as RESULT object and send status 200 as response is successful, 
so when client receive status 200 it can toast success message to user as visual feedback
*/
exports.sendMail = async (req, res) => {
  let { firstname, lastname, email, telephone, message } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: process.env.MAIL_USERNAME,
    subject: message.substring(0, 10) + "...",
    html: `<p><b>First Name</b>:\t${firstname}</p><br/><p><b>Last Name</b>:\t${lastname}</p><br/><p><b>Email</b>:\t${email}</p><br/><p><b>Telephone</b>:\t${telephone}</p><br/><p><b>Comment</b>:\t${message}</p><br/>`,
  };
  await sgMail
    .send(msg)
    .then(() => {
      res.send({ RESULT: "OK" }).status(200);
    })
    .catch((error) => {
      console.error(error);
    });
};
