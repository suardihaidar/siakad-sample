import * as HiIcons from "react-icons/hi";

export const routes = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HiIcons.HiChartPie size="2em" />,
    isMultiLevel: false,
  },
  {
    title: "Biodata",
    path: "/profile",
    icon: <HiIcons.HiIdentification size="2em" />,
    isMultiLevel: false,
  },
  {
    title: "Info Kuliah",
    path: "/info-kuliah",
    icon: <HiIcons.HiBookOpen size="2em" />,
    isMultiLevel: false,
  },
  {
    title: "Rencana dan Hasil Studi",
    path: "",
    icon: <HiIcons.HiDocumentText size="2em" />,
    isMultiLevel: true,
    isExpand: false,
    child: [
      {
        title: "Rencana Studi (KRS)",
        path: "/krs",
      },
      {
        title: "Kartu Hasil Studi",
        path: "/khs",
      },
      {
        title: "Transkip Nilai",
        path: "/transkip-nilai",
      },
    ],
  },
  {
    title: "Biaya Kuliah",
    path: "/biaya-kuliah",
    icon: <HiIcons.HiCash size="2em" />,
    isMultiLevel: false,
  },
  {
    title: "Materi dan Nilai",
    path: "/materi-kuliah",
    icon: <HiIcons.HiClipboardCheck size="2em" />,
    isMultiLevel: false,
  },
  {
    title: "Panduan",
    path: "/panduan",
    icon: <HiIcons.HiBriefcase size="2em" />,
    isMultiLevel: false,
  },
];
