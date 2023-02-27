import * as Ic from "../assets/icons";

export const routes = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Ic.ChartPie className="w-6 h-6" />,
    isMultiLevel: false,
  },
  {
    title: "Biodata",
    path: "/profile",
    icon: <Ic.Identification className="w-6 h-6" />,
    isMultiLevel: false,
  },
  {
    title: "Info Kuliah",
    path: "/info-kuliah",
    icon: <Ic.BookInfo className="w-6 h-6" />,
    isMultiLevel: false,
  },
  {
    title: "Rencana dan Hasil Studi",
    path: "",
    icon: <Ic.Document className="w-6 h-6" />,
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
    icon: <Ic.RupiahCircle className="w-6 h-6" />,
    isMultiLevel: false,
  },
  {
    title: "Materi dan Nilai",
    path: "/materi-kuliah",
    icon: <Ic.ClipboardCheck className="w-6 h-6" />,
    isMultiLevel: false,
  },
  {
    title: "Panduan",
    path: "/panduan",
    icon: <Ic.Briefcase className="w-6 h-6" />,
    isMultiLevel: false,
  },
];
