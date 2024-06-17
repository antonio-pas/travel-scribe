import { S3Client } from '@aws-sdk/client-s3'
export const s3 = new S3Client({
  region: 'auto',
  endpoint: 'https://ae24945969d95be35c376486214a7ab6.r2.cloudflarestorage.com',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})
