import clsx from "clsx";
import MuiLink from "@mui/material/Link";
import { SxProps } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";

type NextLinkProps = {
  sx?: SxProps;
  exact?: boolean;
  activeClass?: string;
  className?: string;
};

const NextLink: React.FC<LinkProps & NextLinkProps> = ({
  sx,
  exact,
  children,
  activeClass,
  className,
  ...props
}) => {
  const { pathname } = useRouter();
  let { href } = props;
  href = href.toString();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link {...props}>
      <MuiLink
        className={clsx({
          [activeClass || "active"]: isActive,
          [className as string]: className,
        })}
        sx={sx}
      >
        {children}
      </MuiLink>
    </Link>
  );
};

export default NextLink;
