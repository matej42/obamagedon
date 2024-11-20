// src/app/prispevok/[prispevokid]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Detail Prispevku | NaPrdAplikacia" }

export default function PostDetail({params}: { params: {prispevokid: string}}) {

  return (
    <Container>
        <Typography> Tu je nejaky prispevok cislo {params.prispevokid} | Stalkujte si tu kolko chcete, aj tak tu nic nie je </Typography>
    </Container>
  );
}