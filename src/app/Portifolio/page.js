"use client"
import { useEffect } from 'react';
import '../globals.css'

export default function Portifolio() {
  useEffect(() => {
    alert("OI");
  }, []);
  return (
    <section>
      <header>
      <title>Meu portifólio</title>
      <h1>Bem vindo ao meu portifolio.</h1>
      </header>
      <p>Olá, meu nome é Mateus Collet Lacerda Machado, nasci no dia 25 de janeiro de 2010 e atualmente sou estudante da ELITI, a Escola de Líderes em T.I. Desde cedo, desenvolvi um grande interesse pela tecnologia, o que me levou a buscar mais informações em programação e desenvolvimento de projetos. A ELITI tem sido um ambiente incrível para meu estudo, formação de amizades e formação de novas habilidades.
        Atualmente, estou envolvido na criação de projetos, como este, que pretendo exibir em um site para compartilhar minhas habilidades e meu progresso com a programação. Meu principal objetivo na ELITI é dominar as diversas linguagens de códigos e programação e as melhores práticas do mercado, pois acredito que essa base será essencial para alcançar algo ainda maior no futuro.</p>
      </section>

  );
}