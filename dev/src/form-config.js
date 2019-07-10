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
    },
    {
      id: "non-text-attr",
      type: "long",
      label: "Non-Text Attr"
    }
  ],
  primaryButtonText: "Search",
  noAttrText: "No searchable attributes for selected entity types"
};

export default FORM_CONFIG;
