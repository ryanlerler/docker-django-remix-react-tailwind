import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";

// Specify the data type for each property in each data object
interface TeamMember {
  id: number;
  name: string;
  image: string;
  member_since_str: string;
  bio: string;
}

export default function TeamView() {
  const data = useLoaderData<TeamMember[]>();

  console.log({ data });

  return (
    <main className="bg-brand-bg mx-6 md:mx-auto md:container py-10">
      <h1 className="font-serif text-h1">
        <strong>The Team</strong>
      </h1>

      <p className="font-sansSerif text-p2 mb-6">
        We at the Artling are passionate about Art and we aim to provide the
        best service possible to our clients. We&apos;re always looking out for
        talented people.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((d: TeamMember) => (
          <div
            key={d.id}
            className="flex gap-4 border-gray-border border-b md:border-none" // Gray border only for mobile view but not desktop view
          >
            <div>
              <img
                src={`http://localhost:8000/media/${d.image}`}
                alt={d.name}
                className="w-25 h-25 rounded-full"
              />
            </div>

            <div>
              <span className="font-sansSerif text-p1 text-brand-gold">
                {d.name}
              </span>

              <div className="font-sansSerif text-p2 text-text-muted">
                {d.member_since_str}
              </div>

              {/*Bottom margin only for mobile view but not desktop view */}
              <p className="font-sansSerif text-p2 leading-relaxed xs:mb-6 md:mb-0">
                {d.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export let loader: LoaderFunction = async ({ request, params }) => {
  const response: any = await axios({
    url: "http://django-backend:8000/team/",
    method: "GET",
  }).catch((err: any) => {
    console.log("AXIOS ERROR: ", { err });
  });

  return response.data.data;
};
