import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(): Promise<void> {
  draftMode().disable();
  redirect(`/`);
}
