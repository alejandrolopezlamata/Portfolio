const fs = require('fs');
const { bundleMDX } = require('mdx-bundler');

function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_WEBSITE_URL;

  if (!raw) {
    throw new Error(
      'NEXT_PUBLIC_WEBSITE_URL is not set. Set it in Vercel env vars (Production) e.g. https://alejandrolopezlamata.vercel.app'
    );
  }

  // remove trailing slash
  const siteUrl = raw.replace(/\/+$/, '');

  // basic sanity check
  if (!siteUrl.startsWith('http://') && !siteUrl.startsWith('https://')) {
    throw new Error(
      `NEXT_PUBLIC_WEBSITE_URL must start with http(s)://. Current value: ${siteUrl}`
    );
  }

  return siteUrl;
}

const SITE_URL = getSiteUrl();

function buildLoc(path) {
  // Encode only the path part; keep base as-is.
  const encodedPath = path
    .split('/')
    .map(part => encodeURIComponent(part))
    .join('/');

  return `${SITE_URL}${encodedPath}`;
}

function addPage(page) {
  const path = page
    .replace('src/pages', '')
    .replace('.page.js', '')
    .replace('.page.mdx', '')
    .replace('/index', '/');

  const route = path === '/index' ? '' : path;

  // Exclude 404 page and generated `[]` pages
  if (route.includes('[') || route.includes('404')) return;

  return `  <url>
    <loc>${buildLoc(route)}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
}

async function addPost(post) {
  const source = fs.readFileSync(post, 'utf-8');
  const { frontmatter } = await bundleMDX({ source });

  if (process.env.NODE_ENV === 'production' && frontmatter.draft) return;

  const path = post.replace('src/posts', '/articles').replace('.mdx', '');

  return `  <url>
    <loc>${buildLoc(path)}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
}

async function generateSitemap() {
  const { globby } = await import('globby');

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/**/*{.page.js,.page.mdx}',
    '!src/pages/_*.js',
    '!src/pages/api/**',
  ]);

  const postUrls = await globby(['src/posts/**/*.mdx']);
  const posts = await Promise.all(postUrls.map(addPost));

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).filter(Boolean).join('\n')}
${posts.filter(Boolean).join('\n')}
</urlset>\n`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
