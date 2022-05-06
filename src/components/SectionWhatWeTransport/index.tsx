//Components
import { useMemo } from 'react';
import { Title } from '../global/Title';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBoxes,
  faCarSide,
  faMotorcycle,
} from '@fortawesome/free-solid-svg-icons';

//Styles
import {
  WrapperWhatWeTransport,
  ContentWhatWeTransport,
  CardContainer,
  Card,
  CardTitle,
} from './styles';

interface ICardsProps {
  id: number;
  title: string;
  description: string;
  Icon: IconProp;
}

export function SectionWhatWeTransport() {
  const cardsContent = useMemo(() => {
    const result: ICardsProps[] = [
      {
        id: 1,
        Icon: faCarSide,
        title: 'Carros',
        description:
          'Transporte de até 3 veiculos de porte pequeno/médio simultaneamente',
      },
      {
        id: 2,
        Icon: faMotorcycle,
        title: 'Motos',
        description:
          'Transporte de até 20 motos de porte pequeno/médio simultanemente',
      },
      {
        id: 3,
        Icon: faBoxes,
        title: 'Variados',
        description:
          'Transporte dos mais diversos tipos de carga seca, como por exemplo, geradores, ferramentas, maquinários, etc...',
      },
    ];

    return result;
  }, []);

  return (
    <WrapperWhatWeTransport id="o-que-transportamos">
      <ContentWhatWeTransport>
        <Title value="O que Transportamos ?" />
        <p>
          A LS Auto Socorro esta preparada para realizar o transporte dos mais
          diversos veiculos e cargas de <strong>até 6 toneladas.</strong>
        </p>
        <CardContainer>
          {cardsContent.map((card) => (
            <Card key={card.id}>
              <FontAwesomeIcon icon={card.Icon} />
              <CardTitle>{card.title}</CardTitle>
              <p>{card.description}</p>
            </Card>
          ))}
        </CardContainer>
      </ContentWhatWeTransport>
    </WrapperWhatWeTransport>
  );
}
