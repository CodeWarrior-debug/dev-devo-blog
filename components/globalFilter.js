import React, { useState, useEffect } from "react";
import { useAsyncDebounce } from "react-table";
import 'regenerator-runtime/runtime'

// regenerator runtime allows the AsyncDebounce to run

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {


  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <div>
      <h2>Search:</h2>
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`
    }
      />
    </div>
  );
}