import { endpointAPI } from "@/lib/utils";

export async function GET() {
  const tutors = await (
    await fetch(endpointAPI("tutors?fields[0]=documentId&fields[1]=name"))
  ).json();
  return Response.json({
    tutors,
  });
}
