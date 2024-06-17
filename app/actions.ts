"use server"
import { revalidatePath } from 'next/cache'
import { db } from '../db/index'
import { entries } from '../db/schema'
import { desc } from 'drizzle-orm'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { s3 } from '@/s3'

const FormSchema = z.object({
  title: z.string().min(1),
  contents: z.string().min(1)
})
function fileIsValid(file: File) {
  if (!file.type.startsWith("image/")) {
    return false
  } else if (file.size > 5 * 1024 * 1024) {
    return false
  }
  return true
}
export async function createEntry(formData: FormData) {
  let formFile = formData.get('file')
  if (!formFile) {
    ///
  } else {
    const file = formFile as File
    if (fileIsValid(file)) {
      const fileBuffer = Buffer.from(await file.arrayBuffer())
      const command = new PutObjectCommand({
        Bucket: 'travelscribe',
        Key: `${file.name}-${Date.now()}`,
        ContentType: file.type,
        Body: fileBuffer
      })
      await s3.send(command)
    } else {

    }
  }
  let values = FormSchema.parse({
    title: formData.get('title'),
    contents: formData.get('contents')
  })
  await db.insert(entries).values(values)
  revalidatePath('/dashboard')
  redirect('/dashboard')
}

export async function getEntries() {
  return await db.select().from(entries).orderBy(desc(entries.createdAt))
}
