export default async function sendName(req, res) {
  const TOKEN = '5303951523:AAHP3J476eqEK3k0yODqvNzdwBBUpwmlr8M';

  const { nome, telefone, assunto } = req.body;

  const message =
    'Olá você entrou em contato com a LS Auto Socorro através do nosso site ?';

  const date = new Date();

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome,
        telefone,
        assunto,
        chat_id: '-1001780291050',
        parse_mode: 'Markdown',
        disable_web_page_preview: 'True',
        text: `
        ------ *LS Auto Socorro Chamado* ------

        Nome: ${nome} 

        Telefone: ${telefone}
        
        Assunto: ${assunto}

        [WHATSAPP](https://api.whatsapp.com/send?phone=+55${telefone}&text=${message})
        
        _Enviado em ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} as ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}_
        `,
      }),
    });

    res.status(200).json({ success: 'Email enviado com sucesso !' });
  } catch (error) {
    res.status(400).json({ success: 'Falha ao enviar o email' });
  }
}
