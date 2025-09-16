import { Metadata } from "next";

type MetadataProps = {
  params: Promise<{ productId: string}>;
};

export const generateMetadata = async ({
  params,
}: MetadataProps): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100)
  })
  return {
    title: `Product ${title}`,
  }
}

export default async function ProductDetails({
  params,
}: 
  MetadataProps
) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}