import { useEffect, useState } from "react";
import FormBuilder from "./components/Elements/FormBuilder";
import PageBuilder from "./components/Elements/PageBuilder";
import json from "./data.json";
import ScreenTypes from "./components/Elements/ScreenTypes/ScreenTypes";
import MyProvider from "./components/Elements/ScreenContext";

function App() {
  function removeQuotesFromKeys(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(removeQuotesFromKeys);
    }

    return Object.keys(obj).reduce((acc, key) => {
      const newKey = key.replace(/"/g, ""); // Remove quotes from key
      acc[newKey] = removeQuotesFromKeys(obj[key]);
      return acc;
    }, {});
  }
  // <MyProvider>
  // </MyProvider>

  return (
    <FormBuilder jsonData={removeQuotesFromKeys(json)} />

    // <PageBuilder jsonData={removeQuotesFromKeys(json)} />
  );
}

export default App;
