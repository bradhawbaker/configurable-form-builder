const FORM_CONFIG = {
  title: "Sample Config Form Title",
  fields: [
    {
      id: "id",
      type: "text",
      label: "Name"
    },
    {
      id: "status",
      type: "enum",
      label: "Status",
      values: ["active", "error", "pending"]
    }
  ]
};

export default FORM_CONFIG;
