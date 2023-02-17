import { lazy } from "react";

export default function lazyLoad(path) {
  return lazy(() => {
    import(path);
  });
}
