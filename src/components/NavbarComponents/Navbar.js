"use client";
import React from "react";
import NavbarLargeDevice from "./NavbarLargeDevice";
import NavbarMobileDevice from "./NavbarMobileDevice";

export default function Navbar() {
  return (
    <>
      <NavbarLargeDevice />
      <NavbarMobileDevice />
    </>
  );
}
