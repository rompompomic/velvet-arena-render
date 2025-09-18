import React from "react";

const Header: React.FC = () => {
  const nav = [
    {
      name: "Pakalpojumi",
      href: "/lv/pakalpojumi/",
      hasDropdown: true,
      sub: [
        { name: "Visi pakalpojumi", href: "/lv/pakalpojumi/" },
        { name: "Jāšanas treniņi", href: "/lv/pakalpojumi/jasanas-trenini/" },
        { name: "Zirgu uzturēšana", href: "/lv/pakalpojumi/zirgu-uzturesana/" },
        { name: "Laukumu īre", href: "/lv/pakalpojumi/laukumu-ire/" },
        { name: "Ekskursijas", href: "/lv/pakalpojumi/ekskursijas/" },
        { name: "Korporatīvie pasākumi", href: "/lv/pakalpojumi/korporativie-pasakumi/" },
        { name: "Citi pakalpojumi", href: "/lv/pakalpojumi/citi-pakalpojumi/" },
      ],
    },
    { name: "Jaunumi", href: "/lv/jaunumi/" }, // если нужен пункт новостей как на референсе
    { name: "Par mums", href: "/lv/par-mums/", hasDropdown: true, sub: [
      { name: "Par mums", href: "/lv/par-mums/" },
      // при необходимости можно добавить якоря/подстраницы
    ]},
    {
      name: "Galerija",
      href: "/lv/galerija/",
      hasDropdown: true,
      sub: [
        { name: "Visu galerija", href: "/lv/galerija/" },
        { name: "Pasākumi", href: "/lv/galerija/pasakumi/" },
        { name: "Jauno jātnieku skola", href: "/lv/galerija/jauno-jatnieku-skola/" },
      ],
    },
    { name: "Kontakti", href: "/lv/kontakti/" },
    { name: "Cenas", href: "/lv/cenas/" },
  ];

  const Lang = () => (
    <div className="flex items-center gap-2 text-xs">
      <span className="font-semibold text-[var(--primary)]">LV</span>
      <span className="text-text/40">/</span>
      <a className="text-text/
