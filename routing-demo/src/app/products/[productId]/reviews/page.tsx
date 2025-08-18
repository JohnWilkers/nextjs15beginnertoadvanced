export default async function ProductReviews({
  params
}: {
  params: Promise<{ productId: string}>;
}) {
  const productId = (await params).productId
  return 
  <>
    <h1>Reviews for {productId}</h1>
    <h2>Review 1</h2>
    <h2>Review 2</h2>
    <h2>Review 3</h2>
  </>
}