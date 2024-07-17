import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";

export default function TeamView() {
  const data = useLoaderData<any>();

  console.log({ data });

  return (
    <main className="mx-6 md:mx-auto md:container ">
      <h1 className="font-serif text-h1">The Team</h1>
      {/* You can delete the line below and replace it with proper view markup  */}
      {/* <div>{JSON.stringify(data)}</div> */}
      <h5>
        We at the Artling are passionate about Art and we aim to provide the
        best service possible to our clients. We&apos;re always looking out for
        talented people.
      </h5>
      <div>
        {data.map((d) => (
          <div>
            <img src={`http://localhost:8000/media/${d.image}`} alt={d.name} />

            {d.name}
            <br />
            {d.member_since_str}
            <br />
            {d.bio}
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
