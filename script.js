const BOT_TOKEN = "8595596858:AAFlfcgi_np5e2MxVzYvIH7vGXBX9LM_ugM";
const CHAT_ID = "8088335060";

async function openShop() {
  const statusDiv = document.getElementById('status');
  statusDiv.innerHTML = `<p style="color:orange;">Bhej raha hoon...</p>`;

  const now = new Date();
  const timeStr = now.toLocaleString('hi-IN');
  const message = `🛒 MyShop\n🚪 Shop khol diya!\n⏰ Time: ${timeStr}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({chat_id: CHAT_ID, text: message})
    });

    const result = await response.json();
    if (result.ok) {
      statusDiv.innerHTML = `<p style="color:#4CAF50; font-size:1.5em;">✅ Message bhej diya!<br>${timeStr}</p>`;
    } else {
      statusDiv.innerHTML = `<p style="color:red;">❌ Error: ${result.description}</p>`;
    }
  } catch(e) {
    statusDiv.innerHTML = `<p style="color:red;">❌ Internet check karo</p>`;
  }
}