import { useEffect } from "react";

function setMeta(name, content) {
  if (!content) {
    return;
  }

  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

export default function usePageMeta({ title, description, robots = "index,follow" }) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("robots", robots);
  }, [title, description, robots]);
}
