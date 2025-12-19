function updateDateTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const malaysiaTime = new Date(utc + 8 * 3600000);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = malaysiaTime.toLocaleDateString('en-GB', options);
  const timeStr = malaysiaTime.toLocaleTimeString('en-GB');

  document.getElementById('datetime').textContent = dateStr + ' | ' + timeStr + ' (Malaysia Time)';
}

updateDateTime();
setInterval(updateDateTime, 1000);