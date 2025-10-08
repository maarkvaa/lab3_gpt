export const createBlogCardTemplate = (article) => {
  const titleClass = article.isMain ? "blog_title" : "blog_title_secondary";
  
  return `
    <div class="blog_card ${article.isMain ? 'main_card' : ''}">
      <img src="${article.image}" alt="${article.alt}" />
      <div class="blog_content">
        <div class="blog_date">${article.date}</div>
        <h3 class="${titleClass}">${article.title}</h3>
        <a href="${article.readMoreLink}" class="blog_read_more">Читать полную статью</a>
      </div>
    </div>
  `;
};

export const blogTemplate = (data) => {
  const mainArticle = data.articles.find(article => article.isMain);
  const secondaryArticles = data.articles.filter(article => !article.isMain);
  
  const mainArticleTemplate = mainArticle ? createBlogCardTemplate(mainArticle) : '';
  const secondaryArticlesTemplate = secondaryArticles.map(article => 
    createBlogCardTemplate(article)
  ).join('');

  const template = `
    <h2 class="blog_header">${data.header}</h2>
    <div class="blog_container">
      <div class="blog_main">
        ${mainArticleTemplate}
      </div>
      <div class="blog_secondary">
        ${secondaryArticlesTemplate}
      </div>
    </div>
  `;

  return template;
};