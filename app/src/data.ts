interface IFiltersData {
  id: string;
  label: string;
  options: {
    name: string;
    value?: string;
  }[];
}

export const filtersData: IFiltersData[] = [
  {
    id: "categories",
    label: "categories",
    options: [
      { name: "all", value: "" },
      { name: "art" },
      { name: "biography" },
      { name: "computers" },
      { name: "history" },
      { name: "medical" },
      { name: "poetry" },
    ],
  },
  {
    id: "sort",
    label: "sorting by",
    options: [{ name: "relevance" }, { name: "newest" }],
  },
];
