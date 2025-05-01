import Image from 'next/image';

interface CarCardProps {
  image: string;
  model: string;
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({ image, model, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-48">
      <Image
            src={image}
            alt={model}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold dark:text-black">{model}</h3>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default CarCard;


// width="0" height="0" sizes="100vw" style={{ width: '180px', height: 'auto' }}