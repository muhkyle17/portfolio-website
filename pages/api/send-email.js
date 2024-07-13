import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, companyName, message } = req.body

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email Options
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Contact form submission from ${firstName}`,
      text: message,
      html: `<h2>You have a new contact form submission from your personal website</h2>
            <h3>Contact Details</h3>
            <p><span style="font-weight: bold;">Name: </span> ${firstName} ${lastName}</p>
            <p><span style="font-weight: bold;">Email: </span> ${email}</p>
            <p><span style="font-weight: bold;">Company Name: </span> ${companyName}</p>
            <h3>Message:</h3>
            <p>${message}</p>
          `,
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log('Email sent successfully')
      res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ message: 'Error sending email.' })
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed.' })
  }
}
