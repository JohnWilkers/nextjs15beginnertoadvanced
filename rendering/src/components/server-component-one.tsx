import fs from "fs";

export const ServerComponentOne = () => {
  console.log(``)
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");

  return (
    <>
      <h1>Server Componet One</h1>
    </>
  )
}