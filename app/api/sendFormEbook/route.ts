import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nome, email, cargo, segmento, funcionarios, telefone, ebooks } =
      data;

    // Validar variáveis de ambiente obrigatórias
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.TARGET_EMAIL
    ) {
      console.error("Variáveis de ambiente faltando");
      return NextResponse.json(
        {
          error: "Configuração SMTP incompleta",
          details: "Verifique as variáveis de ambiente SMTP",
        },
        { status: 500 }
      );
    }

    // Criar transporter (mesma config do email de recuperação)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // HTML mais elaborado (similar ao de recuperação)
    const html = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #4CAF50;
              color: white;
              padding: 15px;
              border-radius: 8px 8px 0 0;
              font-size: 20px;
              text-align: center;
            }
            .content {
              padding: 20px;
              font-size: 16px;
              color: #333;
              line-height: 1.6;
            }
            .info-item {
              margin: 10px 0;
              padding: 8px;
              background-color: #f9f9f9;
              border-left: 4px solid #4CAF50;
            }
            .info-label {
              font-weight: bold;
              color: #2e7d32;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #777;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">Nova Solicitação de Contato</div>
            <div class="content">
              <p>Uma nova solicitação foi recebida através do formulário de contato:</p>
              
              <div class="info-item">
                <span class="info-label">Nome:</span> ${nome}
              </div>
              
              <div class="info-item">
                <span class="info-label">Email:</span> ${email}
              </div>
              
              <div class="info-item">
                <span class="info-label">Cargo:</span> ${cargo}
              </div>
              
              <div class="info-item">
                <span class="info-label">Segmento:</span> ${segmento}
              </div>
              
              <div class="info-item">
                <span class="info-label">Número de Funcionários:</span> ${funcionarios}
              </div>
              
              <div class="info-item">
                <span class="info-label">Telefone:</span> ${telefone}
              </div>
              
              ${
                ebooks && ebooks.length > 0
                  ? `
              <div class="info-item">
                <span class="info-label">Materiais de Interesse:</span>
                <ul style="margin: 5px 0 0 0; padding-left: 20px;">
                  ${ebooks.map((ebook: string) => `<li>${ebook}</li>`).join("")}
                </ul>
              </div>
              `
                  : ""
              }
            </div>
            
            <div class="footer">
              <p>Esta mensagem foi enviada automaticamente pelo sistema de contato.</p>
              <p>Data: ${new Date().toLocaleString("pt-BR")}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Debug: Testar conexão SMTP
    await transporter.verify();
    console.log("Conexão SMTP verificada com sucesso");

    const mailOptions = {
      // Mudanças importantes no cabeçalho
      from: `"IncentivePlus - Contato" <${process.env.SMTP_USER}>`, // Nome mais profissional
      to: process.env.TARGET_EMAIL,
      subject: `Solicitação de contato de ${nome} - ${segmento}`, // Mais específico e pessoal
      html,
      // Headers adicionais para melhor reputação
      headers: {
        "X-Priority": "3",
        "X-Mailer": "IncentivePlus Contact System",
        "Reply-To": email, // Permitir resposta direta ao solicitante
        "X-Auto-Response-Suppress": "OOF", // Suprimir respostas automáticas
      },
      // Versão texto como fallback
      text: `
Nova Solicitação de Contato

Nome: ${nome}
Email: ${email}
Cargo: ${cargo}
Segmento: ${segmento}
Funcionários: ${funcionarios}
Telefone: ${telefone}

${
  ebooks && ebooks.length > 0
    ? `
Materiais de Interesse:
${ebooks.map((ebook: string) => `- ${ebook}`).join("\n")}
`
    : ""
}

Data: ${new Date().toLocaleString("pt-BR")}
      `.trim(),
    };

    console.log("Enviando email de contato...");
    const result = await transporter.sendMail(mailOptions);
    console.log("Email enviado com sucesso:", result.messageId);
    console.log("Destinatário:", process.env.TARGET_EMAIL);

    return NextResponse.json({
      ok: true,
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("Erro detalhado:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: "Erro no envio do email",
          details: error.message,
          name: error.name,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error: "Erro desconhecido no servidor",
      },
      { status: 500 }
    );
  }
}
