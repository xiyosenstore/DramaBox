export async function GET() {
  return Response.json({
    status: true,
    message: "Dramabox API aktif. Gunakan /home, /search, /detail, /episode"
  })
}
