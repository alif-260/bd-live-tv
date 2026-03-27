import { useRef, useState } from "react";
import { ChannelCard } from "./components/ChannelCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { WatchModal } from "./components/WatchModal";
import { type Channel, categories, channels } from "./data/channels";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [watchingChannel, setWatchingChannel] = useState<Channel | null>(null);
  const channelGridRef = useRef<HTMLDivElement>(null);

  const filteredChannels = channels.filter((ch) => {
    const matchesCategory =
      activeCategory === "All" || ch.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  function handleNavChange(nav: string) {
    setActiveNav(nav);
    if (nav === "News") setActiveCategory("News");
    else if (nav === "Entertainment") setActiveCategory("Entertainment");
    else setActiveCategory("All");
    channelGridRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleExplore() {
    setActiveCategory("All");
    channelGridRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        activeNav={activeNav}
        onNavChange={handleNavChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto">
        {/* Hero */}
        <HeroBanner onExplore={handleExplore} />

        {/* Channel Section */}
        <section ref={channelGridRef} className="px-4 sm:px-6 lg:px-8 pb-12">
          {/* Section header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">
              {activeCategory === "All"
                ? "All Channels"
                : `${activeCategory} Channels`}
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({filteredChannels.length} channels)
              </span>
            </h2>
          </div>

          {/* Category filters */}
          <div
            className="flex flex-wrap gap-2 mb-6"
            data-ocid="channels.category.tab"
          >
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                data-ocid={`channels.filter.${cat.toLowerCase()}.tab`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                  activeCategory === cat
                    ? "bg-bd-green text-white border-bd-green"
                    : "bg-white text-gray-600 border-gray-200 hover:border-bd-green hover:text-bd-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredChannels.length > 0 ? (
            <div
              data-ocid="channels.list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {filteredChannels.map((channel, i) => (
                <div key={channel.id} data-ocid={`channels.item.${i + 1}`}>
                  <ChannelCard
                    channel={channel}
                    index={i}
                    onWatch={setWatchingChannel}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              data-ocid="channels.empty_state"
              className="text-center py-16 text-gray-400"
            >
              <p className="text-lg font-medium">No channels found</p>
              <p className="text-sm mt-1">Try a different search or category</p>
            </div>
          )}
        </section>
      </main>

      <Footer />

      <WatchModal
        channel={watchingChannel}
        onClose={() => setWatchingChannel(null)}
      />
    </div>
  );
}
