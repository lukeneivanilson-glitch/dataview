# 🚀 DATAVIEW | Contabilidade & Gestão Estratégica

![Versão](https://img.shields.io/badge/Version-2.6-1ecad3?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-green?style=for-the-badge)
![Market](https://img.shields.io/badge/Market-Angola-blue?style=for-the-badge)

A **DATAVIEW** é uma solução digital de alta performance desenvolvida para o setor de consultoria financeira e gestão em Angola. O projeto foca em transparência, rigor técnico e transformação de dados em decisões estratégicas.

---

## 💎 Diferenciais do Design

O ecossistema visual foi construído sobre o conceito de **"Financial Clarity"**, utilizando:

* **Glassmorphism:** Interfaces com desfoque de fundo (Backdrop Blur) que conferem profundidade e modernidade.
* **Dark-Centric UI:** Paleta focada no `dataview-navy` (#1a242f) para transmitir autoridade e reduzir o cansaço visual.
* **Typography:** Mix entre *Montserrat* (força e presença) e *Inter* (clareza e legibilidade).
* **Micro-interações:** Transições suaves de estado (hover) e animações de entrada para guiar o olhar do utilizador.

---

## 🛠️ Tecnologias & Stack

O projeto utiliza uma arquitetura *lightweight* via CDN para máxima velocidade de carregamento:

| Tecnologia | Função |
| :--- | :--- |
| **Tailwind CSS** | Framework de estilização utilitária e responsividade. |
| **FontAwesome 6** | Biblioteca de ícones técnicos e corporativos. |
| **AOS.js** | Engine de animações baseadas em scroll (Animate On Scroll). |
| **Google Fonts** | Tipografia web otimizada. |

---

## 📂 Estrutura do Repositório

### 1. `index.html` (Landing Page)
Página principal focada na conversão e apresentação institucional.
- **Hero Section:** Dashboard interativo com indicadores de eficiência.
- **Serviços 360º:** Cards interativos detalhando contabilidade, fiscalidade e auditoria.
- **Guia AGT 2026:** Tabela dinâmica com as principais obrigações tributárias (IVA, IRT, II).

### 2. `downloads.html` (Central de Downloads)
Grid de recursos técnicos para clientes e parceiros.
- **Filtros de Categoria:** Navegação rápida por área de interesse.
- **Grid de Documentos:** Cards otimizados para download com identificação por tipo de ficheiro (PDF, Excel).

---

## 🎨 Customização de Cores

As cores da marca estão centralizadas na configuração do Tailwind dentro do cabeçalho de cada arquivo:

```javascript
colors: {
    dataview: {
        dark: '#2d3741',    // Cinza Corporativo
        blue: '#6b8fb1',    // Azul Médio
        accent: '#1ecad3',  // Turquesa (Destaques)
        navy: '#1a242f',    // Fundo Principal
    }
}