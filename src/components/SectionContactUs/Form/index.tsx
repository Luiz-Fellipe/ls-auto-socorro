import { useCallback, useState } from 'react';
import {
  FormContainer,
  InputContainer,
  TextAreaContainer,
  SendedMessage,
} from './styles';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export function Form() {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [sendedSuccess, setSendedSuccess] = useState(false);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const telefone = event.target.telefone.value;
    const assunto = event.target.assunto.value;

    try {
      setSendingEmail(true);
      setSendedSuccess(false);
      await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          telefone,
          assunto,
        }),
      });
      setSendingEmail(false);
      setSendedSuccess(true);
    } catch (error) {
      alert('Erro ao Enviar Email');
      setSendingEmail(false);
      setSendedSuccess(false);
    }
  }, []);

  return (
    <>
      {sendedSuccess && (
        <SendedMessage>
          <h4>Mensagem Enviada!</h4>
          <span>
            Mensagem enviada com sucesso! Aguarde que nossa equipe irá entrar em
            contato com você atráves do seu telefone.
          </span>
        </SendedMessage>
      )}
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            required
            autoComplete="off"
          />
          <label htmlFor="nome">Nome</label>
        </InputContainer>
        <InputContainer>
          <input
            id="telefone"
            type="tel"
            placeholder="Telefone"
            required
            autoComplete="off"
          />
          <label htmlFor="telefone">Telefone</label>
        </InputContainer>

        <TextAreaContainer>
          <textarea
            id="assunto"
            placeholder="Assunto"
            required
            autoComplete="off"
          />
          <label htmlFor="assunto">Assunto</label>
        </TextAreaContainer>

        <button type="submit">
          {sendingEmail ? <FontAwesomeIcon icon={faSpinner} spin /> : 'ENVIAR'}
        </button>
      </FormContainer>
    </>
  );
}
