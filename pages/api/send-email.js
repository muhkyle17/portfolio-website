import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

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
      to: 'reyesmikyle17@gmail.com', // Change this to process.env.EMAIL_TO and move it to .env.local
      subject: `Contact form submission from ${name}`,
      text: message,
      html: `<p>You have a new contact form submission</p>
             <h3>Contact Details</h3>
             <ul>
               <li>Name: ${name}</li>
               <li>Email: ${email}</li>
             </ul>
             <h3>Message</h3>
             <p>${message}</p>`,
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ message: 'Error sending email.' })
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed.' })
  }
}
