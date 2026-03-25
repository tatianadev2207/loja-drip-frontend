import { useNavigate } from 'react-router-dom';
import Carousel from './carousel';
import fireIcon from '../assets/fire.png';
import sneakerImage from '../assets/White-Sneakers-PNG.png';

const Hero = () => {
  const navigate = useNavigate();

  // Dados dos slides
  const slidesData = [
    {
      title: 'Queima de Estoque',
      brand: 'Nike',
      description: 'Descontos imperdíveis em tênis Nike para você renovar seu estilo.',
      image: sneakerImage,
    },
    {
      title: 'Novidades',
      brand: 'Adidas',
      description: 'Conheça os lançamentos mais estilosos da Adidas.',
      image: sneakerImage,
    },
    {
      title: 'Tênis em Alta',
      brand: 'Puma',
      description: 'Os modelos mais procurados com descontos especiais.',
      image: sneakerImage,
    },
    {
      title: 'Promoção Relâmpago',
      brand: 'Vans',
      description: 'Só hoje: até 60% off em diversas marcas!',
      image: sneakerImage,
    },
  ];

  const goToProducts = () => {
    navigate('/produtos');
    window.scrollTo(0, 0);
  };

  // Transforma cada slide em um componente React
  const slideComponents = slidesData.map((slide, idx) => (
    <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto px-4 py-8">
      
      {/* Lado esquerdo - Texto */}
      <div className="text-center lg:text-left">
        <p className="text-yellow-500 text-sm font-semibold mb-2">
          Melhores ofertas personalizadas:
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 leading-snug mb-6">
          {slide.title}{' '}
          <span className="inline-flex items-center gap-2">
            {slide.brand}
            <img
              src={fireIcon}
              alt="Ícone de fogo"
              className="w-16 h-16 inline-block"
            />
          </span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6 max-w-xl mx-auto lg:mx-0">
          {slide.description}
        </p>
        <button
          onClick={goToProducts}
          className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-2 rounded-lg font-semibold transition cursor-pointer"
        >
          Ver Ofertas
        </button>
      </div>

      {/* Lado direito - Imagem */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={slide.image}
          alt={slide.brand}
          className="w-full max-w-md object-contain drop-shadow-xl"
        />
      </div>
    </div>
  ));

  return (
    <section className="relative overflow-hidden bg-[#f0f0f0] py-6">
      <Carousel slides={slideComponents} autoPlayInterval={5000} />
    </section>
  );
};

export default Hero;