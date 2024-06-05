import { validateRequest } from "~/server/auth";
import Navbar from "./navbar";

export default async function Header() {
  const { session } = await validateRequest();

  return (
    <header className="h-20 w-full">
      <div className="container h-full">
        <Navbar session={session!} />
      </div>
    </header>
  );
}
