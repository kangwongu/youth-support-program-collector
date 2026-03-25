import { programs } from '$lib/data/programs';
import { guides } from '$lib/data/guides';

const SITE_URL = 'https://youth-support-program-collector.vercel.app';

export function GET() {
	const staticPages = ['', '/guide', '/about', '/privacy'];

	const guidePages = guides.map((g) => `/guide/${g.slug}`);
	const policyPages = programs.map((p) => `/policy/${p.id}`);

	const allPages = [...staticPages, ...guidePages, ...policyPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>${path === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${path === '' ? '1.0' : path.startsWith('/guide/') || path.startsWith('/policy/') ? '0.8' : '0.6'}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
