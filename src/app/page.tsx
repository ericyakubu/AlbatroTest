import { LoginForm } from "@/components";
import classes from "./Landing.module.scss";

export default function Home() {
  return (
    <main className={classes.landing}>
      <LoginForm />
    </main>
  );
}
