import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast.error("Adding...", {
    duration: 4000,
  });
};

const HotToast = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster position='top-right' />
    </div>
  );
};

export default HotToast;
