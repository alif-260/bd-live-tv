import { Facebook, Mail, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer style={{ backgroundColor: "#0B4F34" }} className="text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🇧🇩</span>
              <span className="font-bold text-lg">BD LIVE TV</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Your ultimate guide to Bangladeshi live television. Stream your
              favourite channels anywhere, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-green-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-green-100">
              {[
                "Home",
                "All Channels",
                "News",
                "Entertainment",
                "Live Guide",
              ].map((link) => (
                <li key={link}>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-green-300 mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-green-100">
              {[
                "News & Current Affairs",
                "Entertainment",
                "Sports",
                "Music",
                "Drama",
              ].map((cat) => (
                <li key={cat}>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-green-300 mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-green-200 mb-3">
              Get the latest channel updates.
            </p>
            <div className="flex gap-2">
              <input
                data-ocid="footer.email.input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              />
              <button
                type="button"
                data-ocid="footer.subscribe.button"
                className="bg-bd-red hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Go
              </button>
            </div>
            <div className="flex gap-3 mt-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  aria-label={label}
                  className="text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </span>
              ))}
              <span
                className="text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-green-300">
          &copy; {year}. Built with &#10084;&#65039; using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
