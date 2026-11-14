(() => {
  /* Add the same profile header to individual paper pages. */

  const isPaperPage = Boolean(document.querySelector("article.detail"));

  if (isPaperPage) {
    const brand = document.querySelector(".header .brand");

    if (brand) {
      const profile = document.createElement("div");
      profile.className = "brand";

      profile.innerHTML = `
        <button
          class="avatar-button"
          type="button"
          aria-label="Enlarge profile photo">
          <img src="../profile.jpg" alt="Usman Ibrahim">
        </button>

        <div class="brand-info">
          <a class="brand-name" href="../index.html#home">
            Usman Ibrahim
          </a>
          <span class="brand-affiliation">
            King Fahd University of Petroleum and Minerals
          </span>
          <span class="brand-affiliation">
            Dhahran, Saudi Arabia
          </span>
        </div>
      `;

      brand.replaceWith(profile);

      let dialog = document.getElementById("photo-viewer");

      if (!dialog) {
        dialog = document.createElement("dialog");
        dialog.id = "photo-viewer";
        dialog.className = "photo-dialog";
        dialog.setAttribute("aria-label", "Profile photo");

        dialog.innerHTML = `
          <button
            class="photo-close"
            type="button"
            aria-label="Close photo">
            ×
          </button>
          <img src="../profile.jpg" alt="Usman Ibrahim">
        `;

        document.body.appendChild(dialog);
      }

      profile.querySelector(".avatar-button").addEventListener(
        "click",
        () => {
          if (!dialog.open) {
            dialog.showModal();
          }
        }
      );

      dialog.querySelector(".photo-close")?.addEventListener(
        "click",
        () => dialog.close()
      );

      dialog.addEventListener("click", event => {
        if (event.target === dialog) {
          dialog.close();
        }
      });
    }
  }

  /* Homepage navigation */

  const panels = [
    ...document.querySelectorAll("[data-page]")
  ];

  const navLinks = [
    ...document.querySelectorAll(".nav a")
  ];

  const titles = {
    home: "Research",
    publications: "Publications",
    presentations: "Presentations",
    news: "News",
    about: "About & links"
  };

  function showPage(scroll) {
    const requested = location.hash.slice(1) || "home";

    const target = panels.some(panel => panel.id === requested)
      ? requested
      : "home";

    panels.forEach(panel => {
      panel.hidden = panel.id !== target;
    });

    navLinks.forEach(link => {
      if (link.hash === "#" + target) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    document.title = "Usman Ibrahim | " + titles[target];

    if (scroll) {
      window.scrollTo(0, 0);

      const heading = document.querySelector(
        "#" + target + " h1"
      );

      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }
  }

  if (panels.length) {
    showPage(false);

    window.addEventListener("hashchange", () => {
      showPage(true);
    });
  }

  /* Publication search */

  const search = document.querySelector("#paper-search");

  search?.addEventListener("input", () => {
    let count = 0;
    const query = search.value.trim().toLowerCase();

    document.querySelectorAll("[data-publication]").forEach(paper => {
      const match = paper.textContent.toLowerCase().includes(query);

      paper.hidden = !match;

      if (match) {
        count++;
      }
    });

    const noResults = document.querySelector(".no-results");

    if (noResults) {
      noResults.hidden = count > 0;
    }
  });

  /* Copy citations */

  document.querySelectorAll("[data-copy-citation]").forEach(button => {
    button.addEventListener("click", async () => {
      const citation =
        button.dataset.copyCitation ||
        "Ibrahim, U., Abbas, N., & Riaz, M. (2026). Joint process monitoring in power plants using conditional aggregate mean control charts. Journal of Industrial and Production Engineering. https://doi.org/10.1080/21681015.2026.2737266";

      const status = button
        .closest("article, .citation-area")
        ?.querySelector('[role="status"]');

      try {
        await navigator.clipboard.writeText(citation);

        if (status) {
          status.textContent = "Citation copied.";
        }
      } catch {
        if (status) {
          status.textContent =
            "Clipboard unavailable. You can select and copy the citation on the paper details page.";
        }
      }
    });
  });

  /* Footer year */

  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });
})();
