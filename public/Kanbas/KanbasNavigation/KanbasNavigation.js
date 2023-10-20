function KanbasNavigation() {
  const links = [
    {
      name: "Account",
      href: "/Kanbas/Account/Profile/screen.html",
      icon: "fa fa-user-circle-o fa-2x",
    },
    {
      name: "Dashboard",
      href: "/Kanbas/Dashboard/screen.html",
      icon: "fa fa-tachometer fa-2x",
    },
    {
      name: "Courses",
      href: "/Kanbas/Courses/Home/screen.html",
      icon: "fa fa-book fa-2x",
    },
    { name: "Calendar", href: "#", icon: "fa fa-calendar fa-2x" },
    { name: "Inbox", href: "#", icon: "fa fa-inbox fa-2x" },
    { name: "History", href: "#", icon: "fa fa-clock-o fa-2x" },
    { name: "Studio", href: "#", icon: "fa fa-desktop fa-2x" },
    {
      name: "Commons",
      href: "#",
      icon: "fa fa-solid fa-arrow-circle-right fa-2x",
    },
    { name: "Help", href: "#", icon: "fa fa-solid fa-question-circle fa-2x" },
  ];

  return `
<ul class="nav nav-tabs nav-justified flex-column kanbas-sidebar bg-black">

    <li><img src="/images/logo.jpg" alt="logo"></li>
    ${links
      .map(
        (link) => `<li class="nav-item"><a class="nav-link" href="${link.href}">
        <i class="${link.icon}"></i><br />${link.name}</a></li>`
      )
      .join("")}

    <li class="nav-item bg-black"><a class="nav-link disabled" href="#"></a></li>
    <li class="nav-item bg-black"><a class="nav-link disabled" href="#"></a></li>
    <li class="nav-item bg-black"><a class="nav-link disabled" href="#"></a></li>
    <li class="nav-item "><a class="nav-link disabled" href="#"></a></li>
</ul>

`;
}

export default KanbasNavigation;
