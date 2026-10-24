const menuToggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav'); menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.textContent = open ? '✕' : '☰' }); document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰' }));
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target) } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
const backTop = document.querySelector('.back-top'); window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500)); backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit', e => { e.preventDefault(); const data = new FormData(e.currentTarget); const name = data.get('name'), email = data.get('email'), topic = data.get('topic'), message = data.get('message'); const text = `Hello PrideRock Church!%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ATopic: ${encodeURIComponent(topic)}%0AMessage: ${encodeURIComponent(message)}`; window.open(`https://wa.me/23409037141652?text=${text}`, '_blank', 'noopener'); });
document.getElementById('newsletterForm').addEventListener('submit', e => { e.preventDefault(); const email = document.getElementById('newsletterEmail').value; const subject = encodeURIComponent('Church newsletter subscription'); const body = encodeURIComponent(`Please add me to the PrideRock Church updates list. My email is ${email}.`); window.location.href = `mailto:hello@PrideRock.org?subject=${subject}&body=${body}`; document.getElementById('newsletterMessage').textContent = 'Your email app is opening so you can request updates.'; });
const sections = [...document.querySelectorAll('main section[id]')]; const navLinks = [...document.querySelectorAll('.nav a')]; window.addEventListener('scroll', () => { let current = 'home'; sections.forEach(section => { if (window.scrollY >= section.offsetTop - 150) current = section.id }); navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`)) });

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.style.display = "none";
    }, 5000);
});








function selectGiving(category) {
  document.getElementById("giving-type").value = category;

  document.getElementById("giving-message").textContent =
    "You selected " + category + ". Enter your amount below.";

  document.getElementById("donate").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function sendDonation() {
  const category =
    document.getElementById("giving-type").value;

  const amount =
    Number(document.getElementById("giving-amount").value);

  if (!Number.isFinite(amount) || amount <= 100) {
    alert("Please enter a valid donation amount.");
    return;
  }

  const message =
    `Hello, I would like to give a donation.\n` +
    `Category: ${category}\n` +
    `Amount: ₦${amount.toLocaleString("en-NG")}\n\n` +
    `Please provide the official donation details.`;

  // Replace with your church's WhatsApp number.
  const churchWhatsApp = "2349037141652";

  if (!/^234\d{10}$/.test(churchWhatsApp)) {
    alert("Please configure your church WhatsApp number in the code.");
    return;
  }

  window.open(
    "https://wa.me/+23409037141652" +
    "?text=" + encodeURIComponent(message),
    "_blank"
  );
}