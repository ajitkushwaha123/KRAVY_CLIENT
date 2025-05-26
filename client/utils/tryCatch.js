export const tryCatch = async (
  asyncFn,
  errorMessage = "Something went wrong"
) => {
  try {
    const data = await asyncFn();
    return data;
  } catch (err) {
    console.error("API Error:", err);

    const message =
      err?.response?.data?.message ||
      err?.response?.data?.msg ||
      err?.message ||
      errorMessage;

    return Promise.reject(new Error(message));
  }
};
