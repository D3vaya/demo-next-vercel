import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const styles: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const router = useRouter();
  const { asPath } = router;
  console.log(router);

  return (
    <Link href={href}>
      <a style={asPath === href ? styles : undefined}>{text}</a>
    </Link>
  );
};
