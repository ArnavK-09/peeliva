import { createSignal, type Component } from "solid-js";

const Sidebar: Component<{ children: Element }> = ({ children: HR }) => {
  const [sidebarOpen, setSidebarOpen] = createSignal(true);
  const [showSidebar, setShowSidebar] = createSignal(true);
  const toggleSidebar = () => {
    if (sidebarOpen() == true) {
      setSidebarOpen(false);
      setTimeout(() => setShowSidebar(false), 50);
    } else {
      setShowSidebar(true);
      setTimeout(() => setSidebarOpen(true), 50);
    }
  };
  return (
    <>
      <div class="bg-gradient-to-tl top-20 rounded-full p-1 flex items-center align-middle text-center z-1000 from-pink-6 via-purple-6 to-blue-5 absolute left-1 md:left-2">
        <button
          onClick={toggleSidebar}
          aria-label="open menu"
          class="cursor-pointer text-3xl font-extrabold text-black i-carbon-menu top-10"
        ></button>
      </div>
      <aside
        class={`${sidebarOpen() ? "translate-x-0" : "-translate-x-full"} ${
          showSidebar() ? "block" : "hidden"
        } backdrop-blur-md h-[95vh] w-[95%] bg-gradient-to-br from-pink-6 via-purple-6 to-blue-5 fixed overflow-hidden lg:static md:max-w-[18rem] md:w-72 transition-all ease-linear p-1 rounded-2xl`}
      >
        <div class="pt-10 bg-black/97 w-full h-full rounded-2xl flex flex-col justify-between px-2 py-4">
          <div class="min-h-max py-4 grid place-items-center w-full">
            <div>
              <a
                href="/dashboard"
                aria-label="logo"
                class="font-semibold flex items-center gap-x-2"
              >
                <div class="flex items-center -space-x-3">
                  <span class="h-6 aspect-square bg-blue-5 rounded-full flex"></span>
                  <span class="h-6 bg-pink-5 aspect-square rounded-full flex"></span>
                </div>
                <span class="text-2xl font-bold tracking-wide text-white">
                  Peeliva
                </span>
              </a>
            </div>
          {HR}
          </div>
          <nav class="h-full">
            <ul class="text-gray-3 space-y-2">
              {["Overview", "Metrics"].map((link) => (
                <li class="w-full group grid place-items-center">
                  <a
                    href="#"
                    class="flex items-center gap-x-4 px-5 py-3 rounded-2xl"
                  >
                    <span class="min-w-max inline-flex">
                      <span class="i-carbon-star font-extrabold text-2xl" />
                    </span>
                    <span class="text-gray-1 transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-pink-6 group-hover:via-purple-6 group-hover:to-blue-5 group-hover:from-40% font-bold tracking-wide text-2xl">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            {HR}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
