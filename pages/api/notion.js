import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const database_id = process.env.NOTION_DATABASE_ID

export default async function handler(req, res) {
  let payload = []

  async function getImages() {
    const data = await notion.databases.query({
      database_id: database_id,
    })
    return data
  }

  await getImages().then(data => {
    payload = data.results
  })

  res.status(200).json({ payload })
}
