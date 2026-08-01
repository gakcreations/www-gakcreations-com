
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const artworks = [
  {title:"Abbaye Aux Dames", image:"/images/Abbaye Aux Dames Saintes France.jpg"},
  {title:"Guggenheim Museum Bilbao", image:"/images/Guggenheim Museum Bilba, Spain.jpg"},
  {title:"San Juan Bautista", image:"/images/Chruch of San Juan Bautista de Banos, Spain.jpg"},
  {title:"Fuerteventura Chapel", image:"/images/Fuerteventura Chapel.jpg"},
  {title:"The Boat That Dreams Of Sea", image:"/images/The Boat That Dreams Of Sea.jpg"},
];

function Home() {
  return (
    <main style={{maxWidth:"1100px",margin:"0 auto",padding:"2rem",fontFamily:"Arial,sans-serif"}}>
      <div style={{textAlign:"center"}}>
        <img src="/images/Logo GAK Creations copy.png" alt="GAK Creations" style={{maxWidth:"220px"}} />
        <h1>GAK Creations</h1>
        <p>Original architectural and travel inspired artwork.</p>
      </div>
      <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"20px",marginTop:"2rem"}}>
      {artworks.map(a=>(
        <figure key={a.title}>
          <img src={a.image} alt={a.title} style={{width:"100%",height:"260px",objectFit:"cover"}}/>
          <figcaption>{a.title}</figcaption>
        </figure>
      ))}
      </section>
      <section style={{marginTop:"3rem",textAlign:"center"}}>
      <h2>About the Artist</h2>
      <p>Welcome to GAK Creations. Explore original artwork inspired by architecture, travel and culture.</p>
      </section>
    </main>
  )
}
