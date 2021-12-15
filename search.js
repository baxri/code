import FuzzySearch from 'fuzzy-search'

// http://localhost:3001/api/search/?site=http://localhost:3001/&q=Effektiva
// http://localhost:3001/searchIndex.json

export default async function handler(req, res) {
  try {
    const { site, q } = req.query

    const networkId = req.headers['deployr-network-id']
    const verticalId = req.headers['deployr-vertical-id']
    const siteId = req.headers['deployr-site-id']

    if (!networkId || !verticalId || !siteId) {
      throw new Error(
        'deployr-network-id or deployr-vertical-id or deployr-site-id is missing from request header!',
      )
    }

    const headers = {
      'deployr-network-id': networkId,
      'deployr-vertical-id': verticalId,
      'deployr-site-id': siteId,
    }

    const url = site || 'http://localhost:3001'

    const response = await fetch(`${url}/searchIndex.json`, {
      method: 'GET',
      headers,
    })

    const json = await response.json()

    const searcher = new FuzzySearch(json, ['name', 'title'], {
      caseSensitive: false,
    })

    const result = searcher.search(q)

    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
