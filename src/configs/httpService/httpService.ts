import { axiosInstance } from "./interceptor";

export const axiosGet = async ({ url }: { url: string }): Promise<any> => {
  const res = await axiosInstance.get(url);
  return res.data;
};

export const axiosPost = async ({
  url,
  body,
}: {
  url: string;
  body: Record<string, any>;
}) => {

  const res = await axiosInstance.post(url, body, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  return res.data;
};
