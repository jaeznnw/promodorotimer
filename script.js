function setClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the rotation for each hand
    const secondRotation = seconds * 6; // 360 / 60 = 6 degrees per second
    const minuteRotation = minutes * 6 + seconds * 0.1; // 6 degrees per minute + partial rotation from seconds
    const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute

    // Apply rotation to the clock hands
    document.querySelector('.second-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${secondRotation}deg)`;
    document.querySelector('.mins-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteRotation}deg)`;
    document.querySelector('.hour-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${hourRotation}deg)`;
}

// Update the clock hands immediately and then every second
setClock();
setInterval(setClock, 1000);
