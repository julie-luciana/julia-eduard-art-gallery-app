import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
export default function App({ Component, pageProps }) {
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the images.");
      error.info = await res.json();

      error.status = res.status;
      throw error;
    }
    return res.json();
  };

  const { data, error } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Layout />

      <Component {...pageProps} pieces={data} />
    </>
  );
}
