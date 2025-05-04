export default async function Blog({ params }: any) {
  const blogId = (await params).blogId;   // [1, 2, 3]

  return (
    <div>
      Blog - {JSON.stringify(blogId)}
    </div>
  )
}