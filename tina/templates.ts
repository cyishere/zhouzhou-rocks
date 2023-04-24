import type { TinaField } from "tinacms";
export function home_profile_templateFields() {
  return [
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
  ] as TinaField[];
}
export function page_layoutFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
      options: [
        {
          label: "@/layouts/PageLayout.astro",
          value: "@/layouts/PageLayout.astro",
        },
      ],
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "image",
      name: "avatar",
      label: "Avatar",
    },
    {
      type: "string",
      name: "avatarAlt",
      label: "Avatar Description",
    },
  ] as TinaField[];
}
export function project_templateFields() {
  return [
    {
      type: "number",
      name: "order",
      label: "显示顺序",
      required: true,
    },
    {
      type: "string",
      name: "project_title",
      label: "Project Title",
      required: true,
    },
    {
      type: "string",
      name: "link",
      label: "Link",
    },
    {
      type: "image",
      name: "cover_image",
      label: "Cover Image",
    },
    {
      type: "string",
      name: "cover_alt",
      label: "Cover Image Description",
    },
    {
      type: "string",
      name: "caption",
      label: "Caption",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "datetime",
      name: "created_at",
      label: "Created At",
    },
  ] as TinaField[];
}
export function post_layoutFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      options: [
        {
          label: "@/layouts/PostLayout.astro",
          value: "@/layouts/PostLayout.astro",
        },
      ],
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "image",
      name: "cover",
      label: "Cover Image",
    },
    {
      type: "string",
      name: "coverAlt",
      label: "Cover Image Description",
    },
  ] as TinaField[];
}
