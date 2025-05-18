
export default function Tasiyici(props) {
  return(
    <div style={{width:"200px", height:"200px", border:"1px solid silver", margin:"0 auto"}}>
        <p style={{padding:`${props.deger}px`}}>{props.deger}</p>
        <p>{props.yazi}</p>
    </div>
  );
}
