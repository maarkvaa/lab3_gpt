import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initExceeding from "./../components/initExceeding.js";
import initCta from "./../components/initCta.js";
import initBlog from "./../components/initBlog.js";
import initFooter from "./../components/initFooter.js";
import initBurger from "./../components/initBurger.js";

const createHomePageTemplate = (rootNode) => {
  const template = `
    <div class="page">
      <section class="section header"></section>
      <section class="section hero_section"></section>
      <section class="section brands_section"></section>
      <section class="section what_is_chatgpt_section"></section>
      <section class="section future_here"></section>
      <section class="section exceeding_expectations"></section>
      <section class="section cta_section"></section>
      <section class="section blog_section"></section>
      <section class="section future-access-section">
        <div class="future-access-container">
          <h2 class="future-access-title">Хотите Шагнуть в Будущее<br>Раньше Других?</h2>
          <div class="future-access-button-container">
            <button class="future-access-button">Запросить ранний доступ</button>
          </div>
        </div>
      </section>
      <footer class="section footer"></footer>
    </div>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = async () => {
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  const pageNode = rootNode.querySelector(".page");
  
  const headerNode = pageNode.querySelector(".header");
  await initHeader(headerNode);

  initBurger(headerNode);

  const heroNode = pageNode.querySelector(".hero_section");
  initHero(heroNode);

  const brandsNode = pageNode.querySelector(".brands_section");
  initBrands(brandsNode);

  const whatIsGptNode = pageNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  const futureHereNode = pageNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  const exceedingNode = pageNode.querySelector(".exceeding_expectations");
  initExceeding(exceedingNode);

  const ctaNode = pageNode.querySelector(".cta_section");
  initCta(ctaNode);

  const blogNode = pageNode.querySelector(".blog_section");
  initBlog(blogNode);

  const footerNode = pageNode.querySelector(".footer");
  initFooter(footerNode);
};
export default homePage;