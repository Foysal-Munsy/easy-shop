// home page loading
import React from "react";

export default function loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="flex gap-10">
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    </div>
  );
}
