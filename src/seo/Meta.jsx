import { useEffect } from 'react'

const seoConfig = {
  title: 'SynapseIQ — AI-Powered Data Automation Platform',
  description:
    'Build AI pipelines, search any corpus semantically, and ship real-time insights — all in one workspace. SOC 2 Type II. 14-day free trial.',
  ogImage: '/assets/og-cover.jpg',
  url: 'https://synapseiq.ai',
}

export default function Meta() {
  useEffect(() => {
    document.title = seoConfig.title

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', seoConfig.description)
    setMeta('og:title', seoConfig.title, true)
    setMeta('og:description', seoConfig.description, true)
    setMeta('og:image', seoConfig.ogImage, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', seoConfig.url, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', seoConfig.title)
    setMeta('twitter:description', seoConfig.description)
    setMeta('twitter:image', seoConfig.ogImage)
  }, [])

  return null
}
