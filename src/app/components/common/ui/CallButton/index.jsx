"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import CallRequestModal from "../CallRequestModal";

export default function CallButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="cs-call_button"
        aria-label="Request a call"
      >
        <Icon icon="mdi:phone" />
      </button>
      <CallRequestModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

