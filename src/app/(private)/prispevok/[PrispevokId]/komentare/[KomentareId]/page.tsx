// src/app/prispevok/[prispevokid]/komentare/[komentareid]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Komentar | NaPrdAplikacia" };

export default function PostCommentDetail({
  params,
}: {
  params: { prispevokid: string; komentareid: string };
}) {
  return (
    <Container>
      <Typography>
        {" "}
        Tu je nejaky komentar cislo {params.komentareid} ku prispevku{" "}
        {params.prispevokid} | Kukajte si na to tu kolko chcete, aj tak tu nic nie
        je{" "}
      </Typography>
    </Container>
  );
}