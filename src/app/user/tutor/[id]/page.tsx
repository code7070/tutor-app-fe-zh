import TutorDetailUI from "./ui";

export interface IResponse {
  data?: {
    name: string;
    [key: string]: string | number | boolean;
  };
  meta: { [key: string]: string | number };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const endpoint = `${process.env.API_ENDPOINT}/api/tutors/${(await params).id}?tutors?fields[0]=name`;
  const tutor = (await (await fetch(endpoint)).json()) as IResponse;
  return {
    title: `${tutor.data?.name ? `Tutor App - ${tutor.data.name}` : "Tutor App"}`,
  };
}

export default function TutorDetailPage() {
  return <TutorDetailUI />;
}
