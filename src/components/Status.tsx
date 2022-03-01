type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (message === "loading") message = "loading";
  else if (message === "success") message = "Data fetched successfully";
  else if (message === "error") message = "Error fetching data";
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
