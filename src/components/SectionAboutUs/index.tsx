//Libs
import Image from 'next/image';

//Components
import { Title } from '../global/Title';
// Assets
import Towing from '~/public/images/towing.svg';

//Styles
import { WrapperAboutUs, ContentAboutUs, ImageContainer } from './styles';

export function SectionAboutUs() {
  return (
    <WrapperAboutUs id="quem-somos">
      <ContentAboutUs>
        <Title value="Quem Somos ?" />
        <ImageContainer>
          <Image
            src={Towing}
            width="251"
            height="167"
            priority
            layout="responsive"
            alt="ilustração de um guincho com um carro em cima e operador ao lado"
          />
        </ImageContainer>
        <p>
          A <strong>LS Auto Socorro </strong> é uma empresa sediada em
          Goiânia-GO, E que atua no mercado de
          <strong> transporte de veiculos e cargas secas. </strong>
          Contamos com uma equipe preparada para
          <strong> atender em todo território nacional.</strong>
        </p>
      </ContentAboutUs>
    </WrapperAboutUs>
  );
}
