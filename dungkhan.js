document.getElementById("btnEmergencyStop").addEventListener("click", function() {
    fetch("http://192.168.1.100/stop")
        .then(response => response.json())
        .then(() => alert("Hệ thống đã dừng!"))
        .catch(error => console.error("Lỗi:", error));
});
