import { response, Router } from "express";
import nodemailer from "nodemailer";

export const emailRouter = Router();

emailRouter.get("/sendemail/", (request, response) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ce26755d70cc9a",
      pass: "c73c52bbe62259",
    },
  });

  const message = {
    from: "noreplay@celke.com.br",
    to: "cesasr@celke.com.br",
    subject: "Message Title",
    text: "text",
    html: "<h1>Aqui é o faissu</h1>",
  };

  transporter.sendMail(message, function (err) {
    if (err)
      return response.status(400).json({
        erro: true,
        message: "Erro: E-mail não enviado com sucesso!",
      });
  });

  return response.json({
    erro: false,
    mensagem: "E-mail enviado com sucesso !",
  });
});
