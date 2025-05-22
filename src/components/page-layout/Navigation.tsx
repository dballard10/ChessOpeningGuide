import { Disclosure } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import logo from "@/assets/chess-guide-logo.webp";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Help", href: "/help", current: false },
];

export function Navigation() {
  const location = useLocation();

  const navigationWithCurrent = navigation.map((item) => ({
    ...item,
    current: location.pathname === item.href,
  }));

  return (
    <div className="relative z-50">
      <Disclosure
        as="nav"
        className="bg-white/10 backdrop-blur-lg border-b border-white/10"
      >
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex-1 flex items-center justify-start">
                  <motion.div
                    className="shrink-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="/">
                      <img
                        className="h-12 w-auto rounded-full"
                        src={logo}
                        alt="Chess Guide Logo"
                      />
                    </a>
                  </motion.div>
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                  <div className="flex items-baseline space-x-4">
                    {navigationWithCurrent.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          item.current
                            ? "bg-white/10 text-white"
                            : "text-gray-300 hover:bg-white/5 hover:text-white",
                          "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="flex-1 flex justify-end">
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-lg bg-white/5 p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1 px-2 pb-3 pt-2 sm:px-3"
              >
                {navigationWithCurrent.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={cn(
                      item.current
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "block rounded-lg px-3 py-2 text-base font-medium transition-all duration-200"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </motion.div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
