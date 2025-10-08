export const ctaTemplate = (data) => {
  const template = `
    <div class="cta_container">
      <div class="cta_content">
        <div class="cta_text">
          <p class="cta_badge">${data.badge}</p>
          <h2 class="cta_title">${data.title}</h2>
        </div>
        <div class="cta_button_container">
          <button class="cta_button">${data.buttonText}</button>
        </div>
      </div>
    </div>
  `;

  return template;
};