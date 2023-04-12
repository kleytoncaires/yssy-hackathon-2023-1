import { useMediaQuery, useTheme } from "@mui/material";

export function breakpoints(type: string) {
  const theme = useTheme();

  const upXs = useMediaQuery(theme.breakpoints.up("xs"));
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));
  const upXl = useMediaQuery(theme.breakpoints.up("xl"));

  const downXs = useMediaQuery(theme.breakpoints.down("xs"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));

  const onlyXs = useMediaQuery(theme.breakpoints.only("xs"));
  const onlySm = useMediaQuery(theme.breakpoints.only("sm"));
  const onlyMd = useMediaQuery(theme.breakpoints.only("md"));
  const onlyLg = useMediaQuery(theme.breakpoints.only("lg"));
  const onlyXl = useMediaQuery(theme.breakpoints.only("xl"));

  const notXs = useMediaQuery(theme.breakpoints.not("xs"));
  const notSm = useMediaQuery(theme.breakpoints.not("sm"));
  const notMd = useMediaQuery(theme.breakpoints.not("md"));
  const notLg = useMediaQuery(theme.breakpoints.not("lg"));
  const notXl = useMediaQuery(theme.breakpoints.not("xl"));

  if (type === "upXs") return upXs;
  if (type === "upSm") return upSm;
  if (type === "upMd") return upMd;
  if (type === "upLg") return upLg;
  if (type === "upXl") return upXl;

  if (type === "downXs") return downXs;
  if (type === "downSm") return downSm;
  if (type === "downMd") return downMd;
  if (type === "downLg") return downLg;
  if (type === "downXl") return downXl;

  if (type === "onlyXs") return onlyXs;
  if (type === "onlySm") return onlySm;
  if (type === "onlyMd") return onlyMd;
  if (type === "onlyLg") return onlyLg;
  if (type === "onlyXl") return onlyXl;

  if (type === "notXs") return notXs;
  if (type === "notSm") return notSm;
  if (type === "notMd") return notMd;
  if (type === "notLg") return notLg;
  if (type === "notXl") return notXl;
}


