function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading product");
  }
  return (
    <>
      <h2>Featured Products</h2>
      {children}
      <h2>Featured Products</h2>
    </>
  )
}