export const exceedingTemplate = (data) => {
  const template = `
    <div class="exceeding_expectations__content">
      <div class="exceeding_expectations__left">
        <img src="${data.image.src}" alt="${data.image.alt}" />
      </div>
      <div class="exceeding_expectations__right">
        <a href="#" class="exceeding__cta_link1">${data.ctaLink1}</a>
        <h2 class="exceeding__header">${data.header}</h2>
        <p class="exceeding__description">
          ${data.description}
        </p>
        <a href="#" class="exceeding__cta_link2">${data.ctaLink2}</a>
      </div>
    </div>
  `;

  return template;
};