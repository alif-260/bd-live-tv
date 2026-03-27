import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type Channel, getEmbedUrl } from "../data/channels";

interface WatchModalProps {
  channel: Channel | null;
  onClose: () => void;
}

export function WatchModal({ channel, onClose }: WatchModalProps) {
  return (
    <AnimatePresence>
      {channel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
          data-ocid="watch.modal"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative bg-gray-900 rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 bg-bd-green">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: channel.color }}
                >
                  {channel.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{channel.name}</p>
                  <p className="text-green-200 text-xs">
                    {channel.category} &middot; Live Stream
                  </p>
                </div>
              </div>
              <button
                type="button"
                data-ocid="watch.modal.close_button"
                onClick={onClose}
                className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe */}
            <div className="aspect-video w-full bg-black">
              <iframe
                src={getEmbedUrl(channel.youtubeUrl)}
                title={`${channel.name} Live Stream`}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 bg-gray-800">
              <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-400 live-pulse" />
                LIVE NOW
              </div>
              <a
                href={channel.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="watch.modal.youtube.link"
                className="text-xs text-white/60 hover:text-white underline transition-colors"
              >
                Open on YouTube &#8599;
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
