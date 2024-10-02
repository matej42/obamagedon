
prepajnanie stranok /1/
subor musí mať haranate zatvorky
https://www.youtube.com/watch?v=Vn4p4K6_M44
export default function PostCommentDetails({params}: 
  {params: {
    PrispevokId #nazov suboru : string params #id č1
    KomentareId: string

  }}
) {

  return (

      <Typography>Prispevok {params.PrispevokId} #id č1 komentare {params.KomentareId}</Typography>

  );
}
