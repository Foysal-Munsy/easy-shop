"use client";
import Link from "next/link";
import React from "react";
export default function RegisterButton() {
  return (
    <div>
      <Link href={"/register"} className="btn">
        Register
      </Link>
    </div>
  );
}
