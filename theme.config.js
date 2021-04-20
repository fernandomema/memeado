export default {
    repository: 'https://github.com/fernandomema/memeado', // project repo
    docsRepository: 'https://github.com/fernandomema/memeado', // docs repo
    branch: 'master', // branch of docs
    path: '/', // path of docs
    titleSuffix: ' – Memeado',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: 'Memeado.',
    footerEditOnGitHubLink: true, // will link to the docs repo
    logo: <>
      <svg>...</svg>
      <span>Memeado</span>
    </>,
    head: <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  }