'use client'
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface CardProductProps {
  urlServer: string;
}

const CardProduct: React.FC<CardProductProps> = ({ urlServer }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const reply = await fetch(urlServer);
        if (!reply.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await reply.json();
        setData(data);
      } catch (error) {

        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [urlServer]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>  
      <section className="flex">
        {data.map(product => (
          <div key={product.id}>
            <picture>
              <img className="w-8/12 h-5/6 object-cover" src={product.image} alt={product.name} />
            </picture>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
          </div>
        ))}
      </section>
      <h2 className="m-20">Hello</h2>
    </>
  );
}

export default CardProduct;
