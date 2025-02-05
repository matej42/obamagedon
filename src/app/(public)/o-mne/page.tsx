// src/app/o-mne/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export const metadata = { title: "O mne | obamagedon" };

export default function About() {
  return (
    <Container>
      <Typography>
        Toto je aplikácia školy, nižšie sú linky na našu školu a sociálne siete tvorcu:
      </Typography>
      <Typography>
        <Link href="https://zochova.sk/" target="_blank" rel="noopener noreferrer">
          Stránka školy
        </Link>
      </Typography>
      <Typography>
        <Link href="https://www.instagram.com/d_petrikovic121" target="_blank" rel="noopener noreferrer">
          Instagram
        </Link>
      </Typography>
      <Typography>
        <Link href="https://www.facebook.com/daniel.petrikovic.16" target="_blank" rel="noopener noreferrer">
          Facebook
        </Link>
      </Typography>
    </Container>
  );
}