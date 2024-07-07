import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, d as addAttribute, i as renderTransition, e as createAstro } from '../astro_BGta5U_X.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Back, a as $$Layout, H as Header, b as $$Footer, s as src } from './_area__yh_Ta3d4.mjs';
/* empty css                             */
/* empty css                          */

const notices = [
  {
    id: "notice-01",
    anteTitle: "LoremLorem, ipsum dolor sit amet consectetur adipisicing elit",
    title: "Notice 01",
    subTitle: "LoremLorem, ipsum dolor sit amet consectetur",
    date: "07/06/2024",
    category: "Derecho Penal",
    synthesis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    body: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.",
      "LoremLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.",
    ],
    images: ["../../../images/temp/about-01.jpg"],
    epigrafe: ["LoremLorem, ipsum dolor sit amet consectetur"],
    links: ["#"],
    keyWords: ["Lorem", "Ipsum", "sit", "amet"],
  },
  {
    id: "notice-02",
    anteTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    title: "Notice 02",
    subTitle: "LoremLorem, ipsum dolor sit amet consectetur",

    date: "07/06/2024",
    category: "Derecho Penal",
    synthesis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    body: [
      "LoremLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.",
      "LoremLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.",
      "LoremLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima exercitationem mollitia quia esse culpa, quidem odio? Provident, corporis autem facere natus voluptas dolorem, error molestiae delectus temporibus asperiores possimus.",
    ],
    images: ["../../../images/temp/about-02.jpeg"],
    epigrafe: ["LoremLorem, ipsum dolor sit amet consectetur"],
    links: ["#"],
    keyWords: ["Lorem", "Ipsum", "sit", "amet"],
  },
];

const $$Astro$1 = createAstro();
const $$Noticia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Noticia;
  const { info } = Astro2.props;
  const SECTION_ID = "#Noticias";
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-ome57bgm> ${renderComponent($$result, "Back", $$Back, { "sectionID": `/${SECTION_ID}`, "data-astro-cid-ome57bgm": true })} <header data-astro-cid-ome57bgm> <span class="antetitle" data-astro-cid-ome57bgm>${info.anteTitle}</span> <h1 data-astro-cid-ome57bgm>${info.title}</h1> <span class="date" data-astro-cid-ome57bgm>${info.date}</span> </header> <article data-astro-cid-ome57bgm> <figure data-astro-cid-ome57bgm> <img${addAttribute(info.images[0], "src")}${addAttribute(`im\xE1gen de ${info.title}`, "alt")} data-astro-cid-ome57bgm${addAttribute(renderTransition($$result, "cufceqcq", "", `image-${info.images[0]}`), "data-astro-transition-scope")}> </figure> <span data-astro-cid-ome57bgm>${info.epigrafe[0]}</span> ${info.body?.map((parrafo) => {
    return renderTemplate`<p data-astro-cid-ome57bgm>${parrafo}</p>`;
  })} </article> <footer class="footer-article_notice" data-astro-cid-ome57bgm> <h3 data-astro-cid-ome57bgm>Palabras claves</h3> <ul data-astro-cid-ome57bgm> ${info.keyWords?.map((keyword) => {
    return renderTemplate`<li data-astro-cid-ome57bgm>${keyword}</li>`;
  })} </ul> </footer> </section> `;
}, "C:/Users/ginoc/desktop/proyecto-abogados/Templates-Studios/template-01/src/components/Astro/sections/Noticia.astro", "self");

const $$Astro = createAstro();
const $$notice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$notice;
  const { notice } = Astro2.params;
  const info = notices.find((noti) => noti.id == notice);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": info.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "about": "/#Sobre-nosotros", "contact": "/#Contacto", "home": "/", "notices": "/#Noticias", "testimonios": "/#Testimonio", "equipo": "/#Equipo", "areasLaborales": "#Areas-laborales", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ginoc/desktop/proyecto-abogados/Templates-Studios/template-01/src/components/React/Header.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Noticia", $$Noticia, { "info": info })} ${renderComponent($$result2, "Footer", $$Footer, { "srcMaps": src })} ` })} `;
}, "C:/Users/ginoc/desktop/proyecto-abogados/Templates-Studios/template-01/src/pages/notices/[notice].astro", void 0);

const $$file = "C:/Users/ginoc/desktop/proyecto-abogados/Templates-Studios/template-01/src/pages/notices/[notice].astro";
const $$url = "/notices/[notice]";

const _notice_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$notice,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _notice_ as _, notices as n };
