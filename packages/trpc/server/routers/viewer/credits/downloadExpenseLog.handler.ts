type DownloadExpenseLogOptions = {
  ctx: {
    user: {
      id: number;
    };
  };
  input: any;
};

export const downloadExpenseLogHandler = async ({}: DownloadExpenseLogOptions) => {
  return {
    csvData: "Date,Credits,Type,Booking UID,Number of Segments,Call Duration,External Ref,Phone Number,Email",
  };
};
