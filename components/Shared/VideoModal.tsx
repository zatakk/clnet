"use client";
import React from "react";
import ReactDOM from "react-dom";
import styles from "@/styles/VideoModal.module.css";

interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  videoUrl,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  // Ensure document is available (avoid SSR issues)
  if (typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <div className={styles.videoWrapper}>
          <iframe
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            className={styles.iframe}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;