import { routesDetails } from '../data/routes';
import { contentData } from '../data/contentData';

export interface PointSearchResult {
  type: 'point';
  routeName: string;
  routeSlug: string;
  point: {
    name: string;
    description: string;
  };
}

export interface PageSearchResult {
  type: 'page';
  title: string;
  path: string;
  content: string;
}

export type SearchResult = PointSearchResult | PageSearchResult;

export function performSearch(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const lowerCaseQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  routesDetails.forEach(route => {
    route.points.forEach(point => {
      const pointName = point.name.toLowerCase();
      const pointDescription = point.description.toLowerCase();
      if (pointName.includes(lowerCaseQuery) || pointDescription.includes(lowerCaseQuery)) {
        results.push({
          type: 'point',
          routeName: route.name,
          routeSlug: route.slug,
          point: {
            name: point.name,
            description: point.description,
          },
        });
      }
    });
  });

  contentData.forEach(page => {
    const pageTitle = page.title.toLowerCase();
    const pageContent = page.content.toLowerCase();
    if (pageTitle.includes(lowerCaseQuery) || pageContent.includes(lowerCaseQuery)) {
      results.push({
        type: 'page',
        title: page.title,
        path: page.path,
        content: page.content,
      });
    }
  });

  return results;
}