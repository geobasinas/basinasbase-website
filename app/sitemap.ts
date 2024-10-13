import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.basinasbase.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.basinasbase.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.basinasbase.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://www.basinasbase.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.basinasbase.com/contact',
      lastModified: new Date(),
    },
    // Add more pages as needed
  ]
}