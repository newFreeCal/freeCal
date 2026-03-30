type FilteredListOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const filteredListHandler = async ({}: FilteredListOptions): Promise<{ workflows: [], teams: [], total: 0 }> => {
  return { workflows: [], teams: [], total: 0 };
};
