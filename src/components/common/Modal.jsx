import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { backdropVariants, modalVariants } from '../../lib/motion';

export const Modal = ({ isOpen, onClose, title, children, maxWidth = "max-w-xl" }) => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={prefersReducedMotion ? {} : backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
            <motion.div
              key="modal"
              variants={prefersReducedMotion ? {} : modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`w-full ${maxWidth} max-h-[90vh] flex flex-col transform overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 text-left align-middle shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pr-4 line-clamp-1">
                  {title}
                </h3>
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.15 }}
                  className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Content (Scrollable if tall) */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
