import fs from "fs";

export const ServerComponentTwo = () => {
  console.log(``)
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");

  return <h1>Server Componet Two</h1>
}