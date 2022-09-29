import { useMemo, useState } from "react";
import distance from "js-levenshtein";

import domains from "./domains";

const useDomainLevenshtein = () => {
  const [value, setValue] = useState<string>("");

  const suggested = useMemo(() => {
    const [left, domain] = value.split("@");

    if (domain) {
      const suggestions = domains.sort((a, b) => {
        return distance(a, domain) - distance(b, domain);
      });

      return left + "@" + suggestions[0];
    }
  }, [value]);

  return {
    value,
    setValue,
    suggested,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
  };
};

export default useDomainLevenshtein;
