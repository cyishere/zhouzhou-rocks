import { defineConfig } from "tinacms";
import { home_profile_templateFields } from "./templates";
import { page_layoutFields } from "./templates";
import { project_templateFields } from "./templates";
import { post_layoutFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "bc22c1b2-e34b-4ee4-856e-2a443c83d978", // Get this from tina.io
  token: "143778bf004daa1d03d77134a626cb0226de7137", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Portfolio",
        name: "portfolio",
        path: "src/pages/portfolio",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...project_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Profile",
        name: "profile",
        path: "src/sections",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "profile",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
          {
            type: "string",
            name: "greeting",
            label: "Greeting",
            required: true,
          },
          {
            type: "string",
            name: "subGreeting",
            label: "Sub Greeting",
          },
          {
            type: "string",
            name: "statement",
            label: "Statement",
            required: true,
          },
          {
            type: "string",
            name: "subStatement",
            label: "Sub Statement",
          },
          {
            type: "string",
            name: "intro",
            label: "Intro",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        format: "md",
        label: "Page",
        name: "page",
        path: "src/pages",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...page_layoutFields(),
        ],
      },
      {
        format: "md",
        label: "Post",
        name: "post",
        path: "src/pages/posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...post_layoutFields(),
        ],
      },
    ],
  },
});
