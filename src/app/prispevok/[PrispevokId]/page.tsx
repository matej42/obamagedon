// src/app/prispevok/[id]/page.tsx


import Typography from "@mui/material/Typography";

export const metadata = { title: "Detail prispevku | ZoškaSnap" };


export default function PostDetail({params}: 
  {params: {PrispevokId: string}}
) {

  return (

      <Typography> Detail prispevku {params.PrispevokId}</Typography>

  );
}
