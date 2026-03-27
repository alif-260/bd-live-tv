import { motion } from "motion/react";
import type { Channel } from "../data/channels";

interface ChannelCardProps {
  channel: Channel;
  index: number;
  onWatch: (channel: Channel) => void;
}

function getInitials(name: string): string {
  const words = name.split(" ");
  if (words.length === 1) return name.slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ChannelCard({ channel, index, onWatch }: ChannelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="channel-card bg-white rounded-xl shadow-card hover:shadow-card-hover cursor-pointer relative overflow-hidden"
    >
      {/* Live badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 live-pulse" />
        LIVE
      </div>

      <div className="p-5">
        {/* Logo area */}
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
          style={{ backgroundColor: channel.color }}
        >
          <span className="text-white font-bold text-xl">
            {getInitials(channel.name)}
          </span>
        </div>

        {/* Info */}
        <div className="text-center mb-4">
          <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1.5">
            {channel.name}
          </h3>
          <span
            className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${
              channel.category === "News"
                ? "bg-red-50 text-red-600 border border-red-200"
                : "bg-purple-50 text-purple-600 border border-purple-200"
            }`}
          >
            {channel.category}
          </span>
        </div>

        {/* Watch button */}
        <button
          type="button"
          data-ocid={`channel.watch.button.${index + 1}`}
          onClick={() => onWatch(channel)}
          className="w-full bg-bd-red hover:bg-red-700 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>Watch Now</span>
          <span>&#9654;</span>
        </button>
      </div>
    </motion.div>
  );
}
