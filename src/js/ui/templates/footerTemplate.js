export const createLinkGroupTemplate = (group) => {
  const itemsTemplate = group.items.map(item => 
    `<a href="${item.href}">${item.title}</a>`
  ).join('');

  return `
    <div class="link_group">
      <h4>${group.title}</h4>
      ${itemsTemplate}
    </div>
  `;
};

export const footerTemplate = (data) => {
  const linksGroupsTemplate = `
    <div class="footer_links">
      ${createLinkGroupTemplate(data.links.linksGroup)}
      ${createLinkGroupTemplate(data.links.companyGroup)}
      ${createLinkGroupTemplate(data.links.contactsGroup)}
    </div>
  `;

  const template = `
    <div class="footer_content">
      <div class="footer_logo">
        <h3 class="footer_title">
          <img class="link__name" src="${data.logo.src}" alt="${data.logo.alt}" />
        </h3>
        <p class="footer_address">${data.address}</p>
        <p class="footer_addresss">${data.copyright}</p>
      </div>
      ${linksGroupsTemplate}
    </div>
    <div class="footer_bottom">
      <p>${data.bottomText}</p>
    </div>
  `;

  return template;
};