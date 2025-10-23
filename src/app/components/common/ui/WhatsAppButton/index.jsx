"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function WhatsAppButton() {
  const phoneNumber = "971553486284"; // WhatsApp format without + and spaces
  const message = "Hello, I would like to inquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="cs-whatsapp_button"
      aria-label="Chat on WhatsApp"
    >
      <Icon icon="mdi:whatsapp" />
    </a>
  );
}

