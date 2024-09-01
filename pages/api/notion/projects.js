import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const database_id = process.env.NOTION_DATABASE_ID

export default async function handler(req, res) {
  if (req.method !== 'GET')
    return res.status(405).json({ message: 'Only GET  requests are allowed.' })

  const data = await notion.databases.query({ database_id })
  const projects = data.results.map(result => result.properties).reverse()

  res.status(200).json({ projects })
}
