import toast from "react-hot-toast";

export const handleFormSubmit = async (values, formikHelpers, config) => {
  const { helperFunction, onSuccess, loadingMsg, successMsg, setIsLoading } =
    config;

  try {
    setIsLoading?.(true);

    const promise = helperFunction(values, formikHelpers);

    await toast.promise(promise, {
      loading: loadingMsg || "Processing...",
      success: successMsg || "Success!",
      error: (err) => err?.message || "Something went wrong",
    });

    onSuccess?.();
  } catch (err) {
    console.error("Form submission error:", err);
  } finally {
    setIsLoading?.(false);
  }
};
