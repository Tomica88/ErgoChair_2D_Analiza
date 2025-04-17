// Catalog.tsx
import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import AnimatedContainer from '../AnimatedContainer';
import ProductCardColors from '../ProductCardColors';
import Window from '../Window';

export type ProductType = {
  id: string;
  imgSrc: string;
  title: string;
  price: number;
  modelSrc: string;
};

const products: ProductType[] = [
  { id: '1', imgSrc: '/assets/chair1.png', title: 'Standardna izdaja', price: 179.99, modelSrc: '/assets/chair1.gltf' },
  { id: '2', imgSrc: '/assets/chair2.png', title: 'Temna izdaja',    price: 199.99, modelSrc: '/assets/chair2.gltf' },
  { id: '3', imgSrc: '/assets/chair3.png', title: 'Omejena izdaja',  price: 219.99, modelSrc: '/assets/chair3.gltf' },
  { id: '4', imgSrc: '/assets/chair4.png', title: 'Modra izdaja',    price: 219.99, modelSrc: '/assets/chair4.gltf' },
  { id: '5', imgSrc: '/assets/chair5.png', title: 'Rdeča izdaja',    price: 219.99, modelSrc: '/assets/chair5.gltf' },
  { id: '6', imgSrc: '/assets/chair6.png', title: 'Oranžna izdaja',  price: 209.99, modelSrc: '/assets/chair6.gltf' },
];

interface CatalogProps {
  selectedProductIndex: number;
  onProductClick: (product: ProductType, index: number) => void;
  changeWheelColor: (color: string) => void;
  changeSeatColor: (color: string) => void;
  changeFrameColor: (color: string) => void;
}

const Catalog: React.FC<CatalogProps> = ({
  selectedProductIndex,
  onProductClick,
  changeWheelColor,
  changeSeatColor,
  changeFrameColor
}) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const toggleWindow = () => setIsWindowOpen(w => !w);

  return (
    <div id="catalog" className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold pl-2 md:pl-8 pb-6">
        <span className="animate-pulse">/ </span> artikli
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            index={idx}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            isActive={selectedProductIndex === idx}
            onClick={() => onProductClick(product, idx)}
            onNakupClick={toggleWindow}
          />
        ))}
      </div>
      {isWindowOpen && <Window toggleWindow={toggleWindow} />}
    </div>
  );
};

export default Catalog;