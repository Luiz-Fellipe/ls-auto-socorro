interface IContentProps {
  id: number;
  title: string;
  url: string;
}

interface IHeaderProps {
  content: IContentProps[];
}

export const config: IHeaderProps = {
  content: [
    {
      id: 1,
      title: 'Home',
      url: '/#home',
    },
    {
      id: 2,
      title: 'Quem Somos',
      url: '/#quem-somos',
    },
    {
      id: 3,
      title: 'O que Transportamos',
      url: '/#o-que-transportamos',
    },
    {
      id: 4,
      title: 'Galeria de Fotos',
      url: '/#galeria-de-fotos',
    },
    {
      id: 5,
      title: 'Fale Conosco',
      url: '/#fale-conosco',
    },
  ],
};
