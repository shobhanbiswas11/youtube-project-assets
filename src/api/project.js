import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";
import { client } from "@/lib/api-client";
import { getCurrentUser } from "aws-amplify/auth";

export async function listProject() {
  const email = (await getCurrentUser()).signInDetails.loginId;

  const res = await client.graphql({
    query: queries.projectByUser,
    variables: {
      userId: email,
    },
  });
  return res.data.projectByUser.items;
}

export async function addProject({ name, description, color }) {
  const email = (await getCurrentUser()).signInDetails.loginId;

  const res = await client.graphql({
    query: mutations.createProject,
    variables: {
      input: {
        userId: email,
        name,
        description,
        colors: [color],
      },
    },
  });
  return res.data.createProject;
}

export async function updateProject(id, attrs) {
  await client.graphql({
    query: mutations.updateProject,
    variables: {
      input: {
        id,
        ...attrs,
      },
    },
  });
}
