export interface Channel {
  id: number;
  name: string;
  category: string;
  youtubeUrl: string;
  color: string;
}

export const channels: Channel[] = [
  {
    id: 1,
    name: "Star News",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@StarNewsTV/live",
    color: "#E53935",
  },
  {
    id: 2,
    name: "Somoy TV",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@SomoyTVlive/live",
    color: "#E53935",
  },
  {
    id: 3,
    name: "Ekhon TV",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@EkhonTV/live",
    color: "#FF6B35",
  },
  {
    id: 4,
    name: "BTV",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@BTVBangladesh/live",
    color: "#0B6B3A",
  },
  {
    id: 5,
    name: "BTV News",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@BTVNews/live",
    color: "#0B6B3A",
  },
  {
    id: 6,
    name: "BTV Chottogram",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@BTVChottogram/live",
    color: "#0B6B3A",
  },
  {
    id: 7,
    name: "Asian TV",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@AsianTV/live",
    color: "#9C27B0",
  },
  {
    id: 8,
    name: "Ekushey TV",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@EkusheyTelevision/live",
    color: "#F44336",
  },
  {
    id: 9,
    name: "Bangla TV",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@BanglaTV/live",
    color: "#2196F3",
  },
  {
    id: 10,
    name: "Desh TV",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@DeshTVBD/live",
    color: "#FF9800",
  },
  {
    id: 11,
    name: "Ananda TV",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@AnandaTV/live",
    color: "#E91E63",
  },
  {
    id: 12,
    name: "Nexus Television",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@NexusTelevision/live",
    color: "#00BCD4",
  },
  {
    id: 13,
    name: "S TV",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@STelevisionBD/live",
    color: "#607D8B",
  },
  {
    id: 14,
    name: "NTV",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@NTVBangladesh/live",
    color: "#3F51B5",
  },
  {
    id: 15,
    name: "ATN Bangla",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@ATNBangla/live",
    color: "#FF5722",
  },
  {
    id: 16,
    name: "ATN News",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@ATNNews/live",
    color: "#FF5722",
  },
  {
    id: 17,
    name: "Jamuna TV",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@JamunaTelevision/live",
    color: "#4CAF50",
  },
  {
    id: 18,
    name: "Independent Television",
    category: "News",
    youtubeUrl: "https://www.youtube.com/@IndependentTelevision/live",
    color: "#795548",
  },
  {
    id: 19,
    name: "RTV",
    category: "Entertainment",
    youtubeUrl: "https://www.youtube.com/@RTVBangladesh/live",
    color: "#F44336",
  },
];

export function getEmbedUrl(youtubeUrl: string): string {
  const match = youtubeUrl.match(/youtube\.com\/@([^/]+)\/live/);
  if (match) {
    const handle = `@${match[1]}`;
    return `https://www.youtube.com/embed/live_stream?channel=${handle}&autoplay=1`;
  }
  return youtubeUrl;
}

export const categories = ["All", "News", "Entertainment"];
