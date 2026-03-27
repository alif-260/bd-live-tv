import { Menu, Search, Tv, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const navLinks = ["Home", "Channels", "News", "Entertainment"];

export function Header({
  activeNav,
  onNavChange,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-bd-green">
              <Tv className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-0.5 font-bold text-xl leading-none">
              <span className="text-2xl">🇧🇩</span>
              <span className="text-bd-green ml-1">BD</span>
              <span className="text-bd-red"> LIVE TV</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link}
                data-ocid={`nav.${link.toLowerCase()}.link`}
                onClick={() => onNavChange(link)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  activeNav === link
                    ? "text-bd-green"
                    : "text-gray-600 hover:text-bd-green"
                }`}
              >
                {link}
                {activeNav === link && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-bd-green rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Search */}
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <div className="relative flex-1">
              <input
                data-ocid="header.search_input"
                type="text"
                placeholder="Search channels..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-3 pr-10 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/30 focus:border-bd-green"
              />
              <button
                type="button"
                data-ocid="header.search_button"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-bd-red text-white p-1.5 rounded-md hover:bg-red-700 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            data-ocid="header.mobile_menu.toggle"
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden py-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link}
                data-ocid={`nav.mobile.${link.toLowerCase()}.link`}
                onClick={() => {
                  onNavChange(link);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium ${
                  activeNav === link
                    ? "text-bd-green bg-green-50"
                    : "text-gray-600"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
