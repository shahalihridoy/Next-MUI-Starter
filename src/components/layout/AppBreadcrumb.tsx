import NextLink from "@components/atoms/NextLink";
import { Span } from "@components/atoms/Typography";
import { ChevronRight } from "@mui/icons-material";
import { Breadcrumbs, Container } from "@mui/material";
import { NAVBAR_HEIGHT } from "@shared/constants";
import navbarNavigations from "@shared/navbarNavigations";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type BreadcrumbItem = {
  title: string;
  url?: string;
};

const findRoute = (
  path: string,
  navList: typeof navbarNavigations,
  result: any,
): BreadcrumbItem[] => {
  const found = navList.some((nav) => {
    if (nav.children) {
      result.push({
        title: nav.title,
      });
      return findRoute(path, nav.children, result);
    } else if (nav.url === path) {
      result.push({ title: nav.title });
      return true;
    }
    return false;
  });

  if (!found) {
    result.length = 0;
  }

  return found && result;
};

const AppBreadcrumb = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const { pathname } = useRouter();
  const homeNav = navbarNavigations.find((nav) => nav.url === "/");

  useEffect(() => {
    const pathList = pathname.split("/");
    pathList.forEach((path) => {
      const list = findRoute(`/${path}`, navbarNavigations, []);
      if (homeNav) {
        list.splice(0, 0, { title: homeNav.title, url: homeNav.url });
      }
      setBreadcrumbs(list);
    });
  }, [pathname, homeNav]);

  return (
    <Container sx={{ marginTop: `calc(${NAVBAR_HEIGHT}px + 1.75rem)` }}>
      {homeNav?.url !== pathname && (
        <Breadcrumbs separator={<ChevronRight fontSize="small" />}>
          {breadcrumbs.map((nav) =>
            nav.url ? (
              <NextLink
                href={nav.url}
                sx={{ color: "primary.main" }}
                key={nav.title}
              >
                {nav.title}
              </NextLink>
            ) : (
              <Span key={nav.title}>{nav.title}</Span>
            ),
          )}
        </Breadcrumbs>
      )}
    </Container>
  );
};

export default AppBreadcrumb;
