function CourseNavigation(active) {
  const links = [
    { name: "Home", href: "/Kanbas/Courses/Home/screen.html" },
    { name: "Modules", href: "/Kanbas/Courses/Modules/screen.html" },
    { name: "Piazza", href: "#" },
    { name: "Zoom Meetings", href: "#" },
    { name: "Assignments", href: "/Kanbas/Courses/Assignments/screen.html" },
    { name: "Grades", href: "/Kanbas/Courses/Grades/screen.html" },
    { name: "People", href: "#" },
    { name: "Quizzes", href: "#" },
    { name: "Panopto Video", href: "#" },
    { name: "Discussions", href: "#" },
    { name: "Annoucements", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Files", href: "#" },
    { name: "Rubrics", href: "#" },
    { name: "Outcomes", href: "#" },
    { name: "Collaborations", href: "#" },
    { name: "Syllabus", href: "#" },
    {
      name: "Settings",
      href: "/Kanbas/Courses/Settings/CourseDetails/screen.html",
    },
  ];

  return `
<ul class="nav flex-column account-sidebar mt-4 account-width text-danger">
  ${links
    .map(
      (link) => `<li class="nav-item">
  <a class="nav-link ${link.name === active ? "active" : ""}" href="${
        link.href
      }"> ${link.name} </a>
</li>`
    )
    .join("")}

</ul>
  `;
}

export default CourseNavigation;
