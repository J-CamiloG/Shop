'use client'
import { useState } from 'react';
import CardProduct from './components/CardProduct';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [urlServerFinal, setUrlServerFinal] = useState<string>("http://localhost:3000/ropa_nino");

  function handleBtnSection(url: string): void {
    setUrlServerFinal(url);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex justify-around items-center w-full">
        <button onClick={() => handleBtnSection("http://localhost:3000/ropa_dama")}>Colection Women</button>
        <button onClick={() => handleBtnSection("http://localhost:3000/ropa_hombre")}>Colection Men</button>
        <button onClick={() => handleBtnSection("http://localhost:3000/ropa_nino")}>Colection Children</button>
      </section>
      <CardProduct urlServer={urlServerFinal} /> {/* Utiliza el componente CardProduct aquí */}
    </main>
  );
}

export default Home;
