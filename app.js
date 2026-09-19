const WHATSAPP_NUMBER = ""; // Set business number in international format, e.g. 6281234567890

const vehicles = [
  {id:"avanza",name:"AVANZA",category:"mpv",price:350000,badge:"BEST SELLER",transmission:"Manual",seats:"6 Kursi",fuel:"Bensin",ac:"AC",image:"https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=82",desc:"MPV praktis untuk keluarga dan perjalanan harian."},
  {id:"innova",name:"INNOVA REBORN",category:"mpv",price:650000,badge:"PROMO",transmission:"Automatic",seats:"7 Kursi",fuel:"Diesel",ac:"AC",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=82",desc:"Kabin lega dan nyaman untuk perjalanan jarak jauh."},
  {id:"fortuner",name:"FORTUNER",category:"suv",price:1200000,badge:"",transmission:"Automatic",seats:"7 Kursi",fuel:"Diesel",ac:"AC",image:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=82",desc:"SUV premium dengan karakter tangguh dan elegan."},
  {id:"xpander",name:"XPANDER",category:"mpv",price:450000,badge:"",transmission:"Automatic",seats:"6 Kursi",fuel:"Bensin",ac:"AC",image:"https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1000&q=82",desc:"Nyaman, modern, dan cocok untuk perjalanan keluarga."}
];
const reviews=[
  ["Rudi Hartono","Pekanbaru","Pelayanan sangat memuaskan, mobil bersih dan wangi. Pasti akan sewa lagi!"],
  ["Dewi Lestari","Pekanbaru","Harga terjangkau, proses cepat dan driver sangat ramah."],
  ["Andi Pratama","Pekanbaru","Armada lengkap dan kondisi mobil sangat terawat. Recommended!"]
];
const money=n=>"Rp "+n.toLocaleString("id-ID");
const grid=document.getElementById("fleetGrid");
function renderFleet(list=vehicles){
  grid.innerHTML=list.length?list.map(v=>`<article class="car-card">
    <div class="car-img" style="background-image:url('${v.image}')">${v.badge?`<span class="badge">${v.badge}</span>`:""}</div>
    <div class="car-body"><div class="car-top"><h3>${v.name}</h3><div class="car-price">${money(v.price)}<small>/ HARI</small></div></div>
    <div class="specs"><span class="spec">${v.transmission}</span><span class="spec">${v.seats}</span><span class="spec">${v.fuel}</span><span class="spec">${v.ac}</span></div>
    <div class="card-actions"><button data-detail="${v.id}">LIHAT DETAIL</button><button data-book="${v.id}">SEWA SEKARANG</button></div></div></article>`).join(""):`<div style="grid-column:1/-1;padding:50px;text-align:center;color:#98a0ad">Mobil tidak tersedia. Silakan pilih filter lain.</div>`;
}
renderFleet();

document.getElementById("categoryFilters").addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b)return;
  document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active")); b.classList.add("active");
  applyFilters();
});
document.getElementById("sortSelect").addEventListener("change",applyFilters);
function applyFilters(){
  const cat=document.querySelector(".chip.active").dataset.filter, sort=document.getElementById("sortSelect").value;
  let list=cat==="all"?[...vehicles]:vehicles.filter(v=>v.category===cat);
  if(sort==="low")list.sort((a,b)=>a.price-b.price); if(sort==="high")list.sort((a,b)=>b.price-a.price);
  renderFleet(list);
}
const modal=document.getElementById("vehicleModal"), modalContent=document.getElementById("modalContent");
function openVehicle(id){
  const v=vehicles.find(x=>x.id===id); if(!v)return;
  modalContent.innerHTML=`<div class="modal-content"><div class="modal-photo" style="background-image:url('${v.image}')"></div><div class="modal-info">
    <div class="section-kicker">VEHICLE DETAIL</div><h2>${v.name}</h2><p>${v.desc}</p>
    <div class="modal-specs"><div>Transmission — ${v.transmission}</div><div>Seats — ${v.seats}</div><div>Fuel — ${v.fuel}</div><div>Climate — ${v.ac}</div><div>Luggage — Available</div><div>Bluetooth — Available</div></div>
    <div class="modal-price">${money(v.price)} <small style="font-size:11px;color:#858e99">/ hari</small></div>
    <button class="btn btn-gold" data-book="${v.id}">BOOK NOW →</button>
    <p style="font-size:10px;margin-top:20px">Syarat: identitas & SIM valid. Deposit, mileage, fuel, cancellation, dan pickup mengikuti paket sewa yang dipilih.</p>
  </div></div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
}
document.addEventListener("click",e=>{
  const detail=e.target.closest("[data-detail]"), book=e.target.closest("[data-book]"), close=e.target.closest("[data-close]");
  if(detail)openVehicle(detail.dataset.detail);
  if(book){modal.classList.remove("open");document.getElementById("booking").scrollIntoView({behavior:"smooth"});document.getElementById("formMessage").textContent=`${vehicles.find(v=>v.id===book.dataset.book)?.name||"Mobil"} dipilih. Lengkapi tanggal dan lokasi untuk melanjutkan.`;showToast("Mobil ditambahkan ke proses booking");}
  if(close){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
});
const start=document.getElementById("startDate"),end=document.getElementById("endDate");
const today=new Date(); const iso=d=>new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
start.min=iso(today); end.min=iso(today);
start.addEventListener("change",()=>{end.min=start.value;if(end.value&&end.value<start.value)end.value=start.value});
document.getElementById("searchForm").addEventListener("submit",e=>{
  e.preventDefault();
  if(!start.value||!end.value||end.value<start.value){document.getElementById("formMessage").textContent="Tanggal kembali harus sama atau setelah tanggal jemput.";return}
  document.getElementById("formMessage").textContent="Pencarian berhasil — menampilkan armada yang tersedia.";
  document.getElementById("fleet").scrollIntoView({behavior:"smooth"});
  showToast("Menampilkan pilihan kendaraan");
});

function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
let deadline=Date.now()+((8*60*60+45*60+32)*1000);
function countdown(){
  let s=Math.max(0,Math.floor((deadline-Date.now())/1000)),h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sec=s%60;
  document.getElementById("hours").textContent=String(h).padStart(2,"0");document.getElementById("minutes").textContent=String(m).padStart(2,"0");document.getElementById("seconds").textContent=String(sec).padStart(2,"0");
  if(s===0){document.querySelector(".countdown-wrap small").textContent="PROMO";document.querySelector(".countdown").innerHTML='<strong style="color:#f5b82e">Promo telah berakhir</strong>'}
}
countdown();setInterval(countdown,1000);

const priceBody=document.getElementById("priceTable");
priceBody.innerHTML=vehicles.map(v=>`<tr><td><strong>${v.name}</strong><br><small style="color:#707986">${v.transmission} · ${v.seats}</small></td><td>${money(v.price)}</td><td>${money(Math.round(v.price*6.5))}</td><td>${money(Math.round(v.price*25))}</td><td><button class="table-btn" data-book="${v.id}">Pilih</button></td></tr>`).join("");

let reviewIndex=0;
function renderReviews(){
  const visible=[0,1,2].map(i=>reviews[(reviewIndex+i)%reviews.length]);
  document.getElementById("reviewGrid").innerHTML=visible.map(r=>`<article class="review"><div class="stars">★★★★★</div><blockquote>“${r[2]}”</blockquote><div class="reviewer"><div class="avatar">${r[0][0]}</div><div><strong>${r[0]}</strong><span>${r[1]}</span></div><span class="verified">✓ VERIFIED</span></div></article>`).join("");
}
renderReviews();
document.getElementById("nextReview").onclick=()=>{reviewIndex=(reviewIndex+1)%reviews.length;renderReviews()};
document.getElementById("prevReview").onclick=()=>{reviewIndex=(reviewIndex+reviews.length-1)%reviews.length;renderReviews()};

function waUrl(){const msg=encodeURIComponent("Halo, saya ingin menyewa mobil.");return WHATSAPP_NUMBER?`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`:`https://wa.me/?text=${msg}`}
document.getElementById("waBtn").href=waUrl();document.getElementById("waFooter").href=waUrl();

const header=document.getElementById("header");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>30));
const menuBtn=document.getElementById("menuBtn"),drawer=document.getElementById("mobileDrawer");
menuBtn.onclick=()=>{const open=!drawer.classList.contains("open");drawer.classList.toggle("open",open);menuBtn.setAttribute("aria-expanded",open)};
drawer.querySelectorAll("a").forEach(a=>a.onclick=()=>{drawer.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")});
