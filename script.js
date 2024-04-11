function calculateNights() {
    const start = new Date(document.getElementById("checkindate").value); 

    const end = new Date(document.getElementById("checkoutdate").value);
    const timeDiff = end - start;

    const nights = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    
    document.getElementById("nyts").innerHTML = `${nights} nights.`;
}


btn.addEventListener("click", calculateNights);





// Random Password Generator Program
btn.addEventListener("click", function() {
    const passwordLength = 5;
    const includeLowerCase = false;
    const includeUppercase = false;
    const includeNumbers = true;
    const includeSymbols = false;

    const pwd = document.getElementById("display");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!<>&#$.?/\\+=_@*%^,:;'"; // Escaped the backslash

    let allowedChars = "";
    let password = "";

    if (includeLowerCase) {
        allowedChars += lowercaseChars;
    }
    if (includeUppercase) {
        allowedChars += uppercaseChars;
    }
    if (includeNumbers) {
        allowedChars += numberChars;
    }
    if (includeSymbols) {
        allowedChars += symbolChars;
    }

    if (passwordLength <= 0) {
        console.log("Password length needs to be at least 1");
        return;  // Exit the function if password length is invalid
    } else if (allowedChars.length === 0) {
        console.log("At least one set of characters needs to be selected.");
        return;  // Exit the function if no character sets are selected
    }

    for (let i = 0; i < passwordLength; i++) {  
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    pwd.textContent = `Here is it,copy it:${password}`;
    display.textContent=`Here is it,copy it:${password}`;
});


//Script code for the map


        var map = L.map('map').setView([2.14, 32.14], 5); // Geolocation of Chobe Safari Lodge.
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Set the position of Chobe Safari Lodge
        const chobeLat = 2.14;
        const chobeLng = 32.14;

        // Add a marker for Chobe Safari Lodge (fixed position)
        L.marker([chobeLat, chobeLng], { icon: L.icon({ iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png', iconSize: [25, 41], iconAnchor: [12, 41] }) }).addTo(map).bindPopup("Chobe Safari Lodge");

        // Add the equator (reduced brightness red line)
        L.polyline([[0, -180], [0, 180]], { color: 'rgba(255, 0, 0, 0.6)' }).addTo(map);

        // Simulate user's position (you can replace this with actual geolocation data)
        navigator.geolocation.watchPosition(success, error);

        let userMarker;
        let userCircle;

        function success(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            if (userMarker) {
                map.removeLayer(userMarker);
                map.removeLayer(userCircle);
            }

            // Add a marker for the user's position
            userMarker = L.marker([userLat, userLng], { icon: L.icon({ iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png', iconSize: [25, 41], iconAnchor: [12, 41] }) }).addTo(map);

            // Add a circle to represent accuracy
            userCircle = L.circle([userLat, userLng], { radius: 50, color: 'red', fillOpacity: 0.2 }).addTo(map);

            // Calculate distance between user and Chobe Safari Lodge (you can use a more accurate method)
            const distance = Math.sqrt((userLat - chobeLat) ** 2 + (userLng - chobeLng) ** 2);
            const distanceText = `Distance to Chobe Safari Lodge: ${distance.toFixed(2)} units`;
            document.body.insertAdjacentHTML('beforeend', `<p>${distanceText}</p>`);
        }

        function error(err) {
            if (err.code === 1) {
                alert("Please allow geolocation access!");
            } else {
                alert("Cannot get your geolocation!");
            }
        }

        // Add a scale to the map
        L.control.scale().addTo(map);

        // Add a legend (key) for markers
                // Add a legend (key) for markers
                const legend = L.control({ position: 'bottomright' });
                legend.onAdd = function (map) {
                    const div = L.DomUtil.create('div', 'info legend');
                    div.innerHTML = `
                        <img src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" alt="School Marker"> Chobe Safari Hotel<br>
                        <img src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" alt="User Marker"> Your Position
                    `;
                    return div;
                };
                legend.addTo(map);
        
                // Add campus directions (example)
                const directions = L.control({ position: 'topleft' });
                directions.onAdd = function (map) {
                    const div = L.DomUtil.create('div', 'info directions');
                    div.innerHTML = `
                        <h3>Campus Directions</h3>
                        <p>Follow the main road to the north for 2 km to reach Chobe Safari Hotel.</p>
                    `;
                    return div;
                };
                directions.addTo(map);
            

                
                //message for creating account.
                function createAccount(){
                    document.getElementById("accountmessage").innerHTML=`Account successfully.Feel free to navigate through the hotel website and enjoy it!`;
                }

                next.addEventListener('click',createAccount);

                //Script for donation
                function donation(){
                    document.getElementById("donation").innerHTML=`You can make your donation to account number:XXXXXXXXXX,Stanbic Bank Uganda.\n Or Via Mobile Money:+26756-697-871/+256394-721-528\nChobe Safari Hotel gratefully appreciate youR donation. Thank so much!`;
                }
                next.addEventListener('click',donation);

                //Partnership function
                function partner(){
                    document.getElementById("partner").innerHTML=`Partnership request successfully sent.The Hotel Management will get in touch with you soon for further discussions.`
                }
                next.addEventListener('click',partner);
                //newsletter function
                function newsletter(){
                    document.getElementById("newsletter").innerHTML=`Thank you for signing up for Chobe Safari Hotel News Letter.We shall keep sending you weakly.`;
                }
                next.addEventListener('click',newsletter);