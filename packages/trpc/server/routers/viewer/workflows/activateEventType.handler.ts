type ActivateEventTypeOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const activateEventTypeHandler = async ({}: ActivateEventTypeOptions): Promise<null> => {
  return null;
};
