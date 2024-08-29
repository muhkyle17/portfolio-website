import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const database_id = process.env.NOTION_DATABASE_ID

export default async function handler(req, res) {
  const data = await notion.databases.query({ database_id })
  const payload = data.results
  res.status(200).json({ payload })
}
