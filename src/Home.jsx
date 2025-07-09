import React from "react";

const sabores = [
  {
    nome: "Clássico Salame & Queijo",
    descricao: "Salame italiano, tomate fresco e queijo derretido.",
    imagem: "/img/kalzone-salame.png",
  },
  {
    nome: "Doce de Chocolate Cremoso",
    descricao: "Recheio generoso de chocolate ao leite derretido.",
    imagem: "/img/kalzone-chocolate.png",
  },
  {
    nome: "Frango, Espinafre e Cream Cheese",
    descricao: "Combinação leve e saborosa com toque de pimentão vermelho.",
    imagem: "/img/kalzone-frango.png",
  },
  {
    nome: "Maçã com Canela",
    descricao: "Maçãs caramelizadas com canela em massa crocante.",
    imagem: "/img/kalzone-maca.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-100 text-gray-800">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Lenhita 🍽️</h1>
        <p className="text-lg mt-2">Tradição e inovação no ramo</p>
        <p className="text-sm mt-1 text-gray-500 italic">Em breve unidade Osório</p>
      </header>

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sabores.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={item.imagem} alt={item.nome} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{item.nome}</h2>
              <p className="text-sm text-gray-600">{item.descricao}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="text-center mt-12">
        <a
          href="https://wa.me/5599999999999"
          className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 text-lg rounded-full inline-block"
        >
          Peça pelo WhatsApp
        </a>
      </div>

      <footer className="text-center text-xs text-gray-400 mt-16 mb-4">
        © 2025 Lenhita. Todos os direitos reservados.
      </footer>
    </div>
  );
}