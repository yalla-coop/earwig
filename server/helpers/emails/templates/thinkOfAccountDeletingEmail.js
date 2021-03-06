const mailer = require("../mailer");
const config = require("../../../config");

module.exports = async ({ message, user }) => {
  const html = `<div style="text-align: left;">
    <p style="font-weight: 700;">Hi Harrison,</p>
    <p>A user has sent a message saying they are thinking of deleting their account. Here is their message:</p>

    <p>"${message}"</p>

    <p>Here is their user information</p>
    <ul>
      <li>Email: ${user.email}</li>
      <li>Verified: ${user.verified}</li>
      <li>Points: ${user.points}</li>
    </ul>

    <p style="margin-bottom: 0;">Thanks,</p>
    <p style="margin-bottom: 0;">The earwig Bot</p>
  </div>  `;


  const { email } = config;

  const to = email.main;
  const adminUser = email.main;
  const pass = email.password;
  const subject = "earwig user deleting account";
  const from = email.aliases.delete;

  return mailer({
    from,
    to,
    subject,
    html,
    user: adminUser,
    pass,
  });
};
