import Joi from 'joi';
import nodemailer from 'nodemailer';

export default (req, res) => {
    const { email, phone, text } = req.body;

    const schema = Joi.object().keys({
        email: Joi.string().email().min(3).max(50).required(),
        phone: Joi.string().alphanum().min(9).max(9).required(),
        text: Joi.string().max(255).required(),
    });
    const dataToValidate = {
        email: email,
        phone: phone,
        text: text,
    };
    const valid = schema.validate(dataToValidate);
    if (valid.error || !email || !phone || !text) {
        return res.success(404).send();
    }
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'bot15121@outlook.com',
            pass: 'haslo15121',
        },
    });
    const mailOptions = {
        from: 'bot15121@outlook.com',
        to: 'kasia.szeller@outlook.com',
        subject: `Pytanie od ${email}`,
        text: `Pytanie od  ${email} wysłane przez www.schellerlaw.pl\n\n${text}\n\nNumer telefonu: ${phone}\n`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(400).send();
        } else {
            return res.status(200).send();
        }
    });
};
