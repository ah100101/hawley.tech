export async function getOGImage(url: string): Promise<string | null> {
  try {
    // Add timeout to prevent hanging requests
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; OGImageBot/1.0)",
      },
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      return null
    }

    const html = await response.text()

    // Try multiple OG image meta tag patterns
    const ogImagePatterns = [
      /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["'][^>]*>/i,
      /<meta\s+content=["']([^"']+)["']\s+property=["']og:image["'][^>]*>/i,
      /<meta\s+name=["']og:image["']\s+content=["']([^"']+)["'][^>]*>/i,
    ]

    for (const pattern of ogImagePatterns) {
      const match = html.match(pattern)
      if (match && match[1]) {
        let ogImageUrl = match[1]

        // Handle relative URLs
        if (ogImageUrl.startsWith("/")) {
          const urlObj = new URL(url)
          ogImageUrl = `${urlObj.protocol}//${urlObj.host}${ogImageUrl}`
        } else if (ogImageUrl.startsWith("./")) {
          const urlObj = new URL(url)
          ogImageUrl = `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}/${ogImageUrl.slice(2)}`
        }

        return ogImageUrl
      }
    }

    return null
  } catch (error) {
    console.error(`Failed to fetch OG image for ${url}:`, error)
    return null
  }
}
