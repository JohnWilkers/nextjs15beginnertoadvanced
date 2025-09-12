import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";
import { clientSideFunction } from '@/utils/client-utils';


export default function ServerRoutePage() {
  const resultSever = serverSideFunction();
  // const resultClient = clientSideFunction();
  
  return (
    <>
      <h1>Server Route {resultSever}</h1>
      <ImageSlider />
    </>
  )
}