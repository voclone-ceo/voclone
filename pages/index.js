export default function Home() {
  return (
    <main style={{background:'#111',color:'#fff',textAlign:'center',padding:'4rem'}}>
      <h1>Clone Your Voice – Studio Quality, 15 Min Delivery</h1>
      <p>Upload a 30-second sample, pay $149, get 10 ready-made ad scripts.</p>
      <button style={{background:'#2ecc71',color:'#fff',padding:'1rem 2rem',fontSize:'1rem',border:'none',borderRadius:4,cursor:'pointer'}}>
        Order Now – $149
      <button
  onClick={() => {
    fetch("/api/checkout", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({priceId: process.env.NEXT_PUBLIC_PRICE_ID})
    })
    .then(res => res.json())
    .then(data => window.location = data.url)
    .catch(err => alert("Checkout error"));
  }}
  style={{background:'#2ecc71',color:'#fff',padding:'1rem 2rem',fontSize:'1rem',border:'none',borderRadius:4,cursor:'pointer'}}
>
  Order Now – $149
</button>
    </main>
  );
}
