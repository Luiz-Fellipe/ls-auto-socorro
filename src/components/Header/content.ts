interface IContentProps {
  title: string;
  url: string;
}

interface IHeaderProps {
  content: IContentProps[];
}

export const config: IHeaderProps = {
  content: [
    {
      title: 'Home',
      url: '/#home',
    },
    {
      title: 'Quem Somos',
      url: '/#quem-somos',
    },
    {
      title: 'O que Transportamos',
      url: '/#o-que-transportamos',
    },
    {
      title: 'Galeria de Fotos',
      url: '/#galeria-de-fotos',
    },
    {
      title: 'Fale Conosco',
      url: '/#fale-conosco',
    },
  ],
};
