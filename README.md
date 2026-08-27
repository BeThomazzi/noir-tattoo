# 🖋️ Noir Tattoo — Landing Page

> 🇧🇷 Site autoral para o estúdio de tatuagem contemporâneo Noir Tattoo, com composição editorial, tipografia forte e galeria de portfólio pensada para receber fotografias reais dos trabalhos.

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=black)

---

## 🚀 Acessar DEMO

**[🔗 Acessar a demonstração da Noir Tattoo](https://noirtattoolp.vercel.app/)**

---

# 🇧🇷 Português

## 📌 Sobre o projeto

O **Noir Tattoo** é o site de um estúdio de tatuagem autoral, construído para funcionar como um editorial de arte e portfólio de artista, e não como um site institucional tradicional. A proposta é fugir completamente da estética genérica de "site de estúdio de tatuagem", com composição assimétrica, tipografia com personalidade e ritmo variado entre as seções.

Este repositório contém o **código-fonte completo do frontend**, publicado como projeto de portfólio.

## 🎯 Proposta do site

O objetivo é transmitir personalidade, exclusividade e profissionalismo, conduzindo o visitante por uma experiência que lembra mais uma revista ou exposição do que um site comum:

* Causar impacto visual imediato na hero, sem o modelo tradicional centralizado
* Apresentar o manifesto do estúdio como uma pausa visual
* Exibir o portfólio como uma galeria editorial, não como um grid genérico
* Mostrar o artista de forma humana, e não como um perfil corporativo
* Narrar o processo de tatuagem em etapas, como uma timeline
* Reduzir fricção na hora de agendar uma conversa

## ✨ Estrutura da página

### 🎥 Hero

* Composição editorial assimétrica, com fotografia artística do estúdio/artista como elemento principal
* Headline, subtítulo curto, CTA principal e CTA secundário, com pequenos elementos tipográficos de apoio (TATTOO • CUSTOM • PRIVATE STUDIO)
* Entrada suave em sequência (imagem, headline com reveal vertical, textos de apoio e CTA por último), com indicador de scroll minimalista

### 🖋️ Manifesto

* Seção minimalista, sem imagem, com texto grande apresentando a filosofia do estúdio
* Funciona como uma pausa visual dentro do scroll

### 🖼️ Trabalhos

* Galeria editorial assimétrica, misturando imagens grandes, pequenas, verticais e horizontais, com espaços vazios intencionais
* Cada trabalho exibido com estilo, localização no corpo (quando relevante) e nome do artista
* Abertura em lightbox elegante
* Imagens preparadas como placeholders, para substituição futura por fotografias reais do estúdio

### 🎨 Estilos

* Composição tipográfica, sem cards, apresentando os estilos trabalhados: Blackwork, Fine Line, Minimalista, Ornamental, Realismo e Custom

### 🧑‍🎨 O artista

* Seção humana e assimétrica, com fotografia (placeholder), nome, história breve, especialidades e filosofia de trabalho

### 🧭 O processo

* Timeline elegante em cinco etapas: Conversa, Ideia, Desenho, Sessão e Tatuagem, reveladas suavemente conforme o scroll

### 🏛️ O estúdio

* Composição editorial com placeholders de fotografia do ambiente (bancada, máquinas, materiais e espaço), preparada para substituição por fotos reais

### 📅 Agendamento

* Seção de conversão direta, com CTA voltado a WhatsApp ou formulário simples

### 📇 Contato e footer

* Área de contato enxuta: Instagram, WhatsApp, localização e horários, sem formulário extenso
* Footer minimalista, com logo, frase de assinatura, links essenciais e Instagram

## 🎨 Identidade visual

* Base predominantemente preta, off-white e cinza, com pequenos detalhes em vermelho escuro/vinho
* Combinação de uma fonte serifada editorial para títulos com uma sans-serif limpa para textos e navegação
* Muito espaço negativo e variação de altura entre as seções, para evitar sensação de template
* Portfólio e ambiente do estúdio preparados com placeholders, pensados para receber fotografias reais

## 🎬 Animações e experiência

* Animações discretas (fade, reveal, pequenos deslocamentos e parallax leve) construídas com **GSAP** e **ScrollTrigger**
* Transições de imagem suaves na galeria e no lightbox
* Todas as animações respeitam `prefers-reduced-motion`
* Mobile tratado como experiência própria, com reorganização da galeria e CTA de contato acessível

## 🧩 Tecnologias

| Tecnologia | Utilização |
|---|---|
| **Next.js** | Framework React, rotas e build |
| **React** | Construção da interface |
| **TypeScript** | Tipagem do projeto |
| **Tailwind CSS** | Estilização e responsividade |
| **GSAP + ScrollTrigger** | Animações e efeitos de scroll |

## 🚀 Executando localmente

```bash
git clone https://github.com/BeThomazzi/noir-tattoo.git
cd noir-tattoo
npm install
npm run dev
```

A aplicação estará disponível normalmente em `http://localhost:3000`.

---

## 👨‍💻 Autor

Desenvolvido por **Bernardo Thomazzi**.

**GitHub:** [@BeThomazzi](https://github.com/BeThomazzi)

---

# 🇺🇸 English

## 📌 About

**Noir Tattoo** is the website for an author-driven tattoo studio, built to work as an art editorial and artist portfolio rather than a traditional institutional site. The idea is to move completely away from the generic "tattoo studio website" aesthetic, using asymmetrical composition, typography with personality and varied pacing between sections.

This repository contains the **complete frontend source code**, published as a portfolio project.

## 🎯 Site Concept

The goal is to convey personality, exclusivity and professionalism, guiding the visitor through an experience closer to a magazine or exhibition than a typical website:

* Create immediate visual impact in the hero, moving away from the traditional centered model
* Present the studio's manifesto as a visual pause
* Display the portfolio as an editorial gallery, not a generic grid
* Show the artist in a human way, rather than as a corporate profile
* Narrate the tattoo process in steps, like a timeline
* Reduce friction when booking a conversation

## ✨ Page Structure

### 🎥 Hero (100vh)

* Asymmetrical editorial composition, with an artistic photograph of the studio/artist as the main visual element
* Headline, short subtitle, main CTA and secondary CTA, with small supporting typographic elements (TATTOO • CUSTOM • PRIVATE STUDIO)
* Smooth sequential entrance (image, headline with vertical reveal, supporting text and CTA last), with a minimalist scroll indicator

### 🖋️ Manifesto

* Minimalist section, with no image, featuring large text presenting the studio's philosophy
* Works as a visual pause within the scroll

### 🖼️ Works

* Asymmetrical editorial gallery, mixing large, small, vertical and horizontal images, with intentional empty spaces
* Each piece shown with style, body placement (when relevant) and artist name
* Opens in an elegant lightbox
* Images prepared as placeholders, ready to be replaced with real studio photography

### 🎨 Styles

* Typographic composition, with no cards, presenting the styles worked on: Blackwork, Fine Line, Minimalist, Ornamental, Realism and Custom

### 🧑‍🎨 The Artist

* Human, asymmetrical section, with a photograph (placeholder), name, brief story, specialties and work philosophy

### 🧭 The Process

* Elegant timeline in five steps: Conversation, Idea, Sketch, Session and Tattoo, smoothly revealed as the user scrolls

### 🏛️ The Studio

* Editorial composition with placeholder photography of the space (workstation, machines, materials and environment), ready to be replaced with real photos

### 📅 Booking

* Direct conversion section, with a CTA pointing to WhatsApp or a simple form

### 📇 Contact and Footer

* Lean contact area: Instagram, WhatsApp, location and hours, with no extensive form
* Minimalist footer, with logo, tagline, essential links and Instagram

## 🎨 Visual Identity

* Predominantly black, off-white and gray base, with small dark red/wine details
* A combination of an editorial serif font for headings with a clean sans-serif for body text and navigation
* Plenty of negative space and varied section heights, to avoid a template-like feel
* Portfolio and studio environment prepared with placeholders, ready to receive real photography

## 🎬 Animations and Experience

* Subtle animations (fade, reveal, small shifts and light parallax) built with **GSAP** and **ScrollTrigger**
* Smooth image transitions in the gallery and lightbox
* All animations respect `prefers-reduced-motion`
* Mobile treated as its own experience, with a reorganized gallery and an accessible contact CTA

## 🧩 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | React framework, routing and build |
| **React** | Interface development |
| **TypeScript** | Project typing |
| **Tailwind CSS** | Styling and responsive layouts |
| **GSAP + ScrollTrigger** | Animations and scroll effects |

## 🚀 Getting Started

```bash
git clone https://github.com/BeThomazzi/noir-tattoo.git
cd noir-tattoo
npm install
npm run dev
```

The application will usually be available at `http://localhost:3000`.

---

## 👨‍💻 Author

Developed by **Bernardo Thomazzi**.

**GitHub:** [@BeThomazzi](https://github.com/BeThomazzi)
