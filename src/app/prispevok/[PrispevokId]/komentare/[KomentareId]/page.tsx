// src/app/prispevok/[id]/page.tsx


import Typography from "@mui/material/Typography";

export const metadata = { title: "komentarefr | ZoškaSnap" };


export default function PostCommentDetails({params}: 
  {params: {
    PrispevokId: string
    KomentareId: string

  }}
) {

  return (

      <Typography>Prispevok {params.PrispevokId}  komentare {params.KomentareId}</Typography>

  );
}
