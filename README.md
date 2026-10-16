# Usman Ibrahim — researcher website

A static website for GitHub Pages. No package installation or build step is required.

## Publish

1. Back up your existing index.html first.
2. Extract this ZIP on your computer.
3. Upload index.html, styles.css, site.js, and the papers folder into the ROOT of your GitHub Pages repository. Do not upload the enclosing researcher-site folder itself.
4. Commit the changes. Keep your existing Pages publishing settings.
5. Open your website and refresh after deployment finishes. If an old version persists, use a hard refresh.

The site uses only the verified publication and ORCID supplied in this conversation. No degrees, academic position, contact address, or extra publications have been invented. Review the short biography and affiliation before publishing.

## Files

- index.html: profile, publications, presentations, news, and academic links.
- styles.css: colors, typography, and mobile layout.
- site.js: navigation, publication search, citation copying.
- papers/conditional-aggregate-mean.html: individual publication page with full abstract and Google Scholar metadata.

## Editing your profile

Use GitHub's file editor to edit index.html. Search for the visible text you want to replace. HTML comments beginning EDIT, ADD, or OPTIONAL mark common editing locations. Save by committing changes.

All navigation sections are in index.html. The URL fragment (for example #news) opens that section directly. Without JavaScript all sections remain readable. Paper detail pages are separate, normal HTML URLs.

## Add a publication

1. In index.html, find ADD PAPER and duplicate the entire article element, including its closing tag. Change the title, authors, year, summary, and links. Put newer articles first.
2. Set the copy button's data-copy-citation attribute to the new citation. Example: <button class="text-button" data-copy-citation="Your full citation here">Copy citation</button>. Encode ampersands in attributes as &amp; and quotation marks as &quot;.
3. Copy papers/conditional-aggregate-mean.html to a new descriptive filename within papers/.
4. Update its title, description, citation_* metadata, authors, date, abstract, keywords, links, citation, and BibTeX. Its copy button also needs the new data-copy-citation value.
5. Link the publication listing to that detail page. This gives every paper its own readable URL and bibliographic metadata.
6. To change the home-page feature, edit the Featured research article separately.

Do not put citation_* tags for several papers on the profile homepage. Keep them on the corresponding individual paper pages. Do not add citation_pdf_url unless it points to a real, permitted full-text PDF. Public availability does not guarantee search indexing or AI citations.

## Add a presentation

In index.html, find ADD PRESENTATION. Remove the empty-state div and insert an article using the same card and paper-title classes as the publications. Include its actual title, event, date, and a normal link to your slides.

Upload slides to a folder called files and use a relative link such as files/talk-title.pdf. Do not publish confidential or restricted material. No presentations were invented in this version.

## Add news

Find ADD NEWS. Duplicate the complete news-item article. Change the time element's datetime value (YYYY-MM-DD), visible date, heading, description, and link. Update Latest news on the home page separately.

## Add CV and contact

In About & links, find OPTIONAL. Add only the links you want public, including an email link (mailto:your-address), Google Scholar, or LinkedIn. For a CV, upload files/cv.pdf and link to it. No disabled links or fictional contact details are included.

## Colors

The first line of styles.css defines the palette: --paper (ivory), --ink (navy), --teal (accent), --muted (secondary text). The decorative chart is an illustration, not study data. Google Fonts provides the optional typefaces; local fallback fonts work if it is unavailable.

## Access and privacy

The publisher ePrint link may exhaust its free-access allowance. A DOI link is retained as the permanent reference. The publisher PDF is not included. This site has no analytics or tracking scripts, but requests Google Fonts. Remove the @import line in styles.css to use only local fonts.
