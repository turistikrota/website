export default function AccountMenu() {
  const els = [
    {
      title: "My Profile",
      href: "/account/[userName]",
      icon: "bx bx-user-circle",
    },
    {
      title: "Security",
      href: "/account/[userName]/security",
      icon: "bx bx-lock",
    },
    {
      title: "Notifications",
      href: "/account/[userName]/notifications",
      icon: "bx bx-bell",
      badge: 2,
      badgeColor: "bg-red-500",
    },
    {
      title: "Billing",
      href: "/account/[userName]/billing",
      icon: "bx bx-credit-card",
    },
    {
      title: "Settings",
      href: "/account/[userName]/settings",
      icon: "bx bx-cog",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full h-full rounded-md">
      <h1 className="text-2xl font-bold">AccountMenu</h1>
      <div className="grid gap-4 w-full">
        {els.map((el, i) => (
          <div
            key={i}
            className="w-full bg-second rounded-md grid grid-cols-4 py-1"
          >
            <div className="flex items-center justify-center rounded-md">
              <div className="relative">
                <i
                  className={`${el.icon} text-2xl text-gray-700 dark:text-white`}
                ></i>
                {el.badge && (
                  <span
                    className={`absolute top-0 -right-2 flex items-center text-xs text-white justify-center w-4 h-4 rounded-full ${el.badgeColor}`}
                    role="alert"
                    aria-label="notify-badge"
                    title="notify-badge"
                  >
                    {el.badge}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start justify-center col-span-3">
              <span className="text-sm font-semibold text-gray-900  dark:text-white">
                {el.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
