// src/app/profil/[id]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Detail Profilu | NaPrdAplikacia" }

export default function ProfileDetail() {

  return (
    <Container>
        <Typography> Tu je nejaky profil | Stalkujte si ho kolko chcete, aj tak tu nic nie je </Typography>
    </Container>
  );
}