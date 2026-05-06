import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    const links = {
      ABC: "https://shopee.vn",
      HAI: "https://google.com",
    };

    if (code && links[code]) {
      window.location.href = links[code];
    }
  }, [code]);

  return <p>Đang chuyển hướng...</p>;
}
