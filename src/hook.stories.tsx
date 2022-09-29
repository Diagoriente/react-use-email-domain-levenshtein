import React from "react";

import useDomainLevenshtein from "./useDomainLevenshtein";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "useDomainLevenshtein",
};

export const Default = () => {
  const { bind, suggested } = useDomainLevenshtein();

  return (
    <>
      <input type="email" name="email" required {...bind} />

      <p>
        Adresse email suggéré :{" "}
        {suggested?.length ? suggested : "Aucune pour le moment"}
      </p>
    </>
  );
};
