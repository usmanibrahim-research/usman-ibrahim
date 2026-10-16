/* Navigation enhances normal HTML. With JavaScript disabled, all sections remain readable. */
(() => {
  const panels = [...document.querySelectorAll('[data-page]')];
  const navLinks = [...document.querySelectorAll('.nav a')];
  const titles = { home: 'Research', publications: 'Publications', presentations: 'Presentations', news: 'News', about: 'About & links' };
  function showPage(scroll) {
    const requested = location.hash.slice(1) || 'home';
    const target = panels.some(p => p.id === requested) ? requested : 'home';
    panels.forEach(p => { p.hidden = p.id !== target; });
    navLinks.forEach(a => a.hash === '#' + target ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    document.title = 'Usman Ibrahim | ' + titles[target];
    if (scroll) { window.scrollTo(0, 0); const heading = document.querySelector('#' + target + ' h1'); if (heading) { heading.tabIndex = -1; heading.focus({preventScroll:true}); } }
  }
  if (panels.length) { showPage(false); window.addEventListener('hashchange', () => showPage(true)); }
  const search = document.querySelector('#paper-search');
  search?.addEventListener('input', () => {
    let count = 0;
    document.querySelectorAll('[data-publication]').forEach(p => { const match = p.textContent.toLowerCase().includes(search.value.trim().toLowerCase()); p.hidden = !match; if (match) count++; });
    document.querySelector('.no-results').hidden = count > 0;
  });
  document.querySelectorAll('[data-copy-citation]').forEach(button => button.addEventListener('click', async () => {
    const citation = button.dataset.copyCitation || 'Ibrahim, U., Abbas, N., & Riaz, M. (2026). Joint process monitoring in power plants using conditional aggregate mean control charts. Journal of Industrial and Production Engineering. https://doi.org/10.1080/21681015.2026.2737266';
    const status = button.closest('article, .citation-area')?.querySelector('[role="status"]');
    try { await navigator.clipboard.writeText(citation); if (status) status.textContent = 'Citation copied.'; }
    catch { if (status) status.textContent = 'Clipboard unavailable. You can select and copy the citation on the paper details page.'; }
  }));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
